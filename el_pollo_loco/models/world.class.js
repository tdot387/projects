class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarCoins = new StatusBarCoins();
    statusBarBottles = new StatusBarBottles();
    endboss = level1.enemies[7];

    throwableObjects = [];
    bottleAmount = 0;
    coinAmount = 0;
    throwable = true;
    throwTime = 0;

    coin_sound = new Audio('audio/collect_coin.mp3');
    bottle_sound = new Audio('audio/collect_bottle.mp3');
    bg_music = new Audio('audio/bg-music.mp3');
    dead_chicken = new Audio('audio/dead_chicken.mp3');
    endboss_hit = new Audio('audio/ouch.mp3');
    splash_sound = new Audio('audio/splash_bottle.mp3');

    killedChicken = 0;
    killedSmallChicken = 0;

    collidesWithEndboss = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.bg_music.play();
    }


    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.checkCollisionsBottleWithEndboss();
        }, 200);

        setStoppableInterval(() => {
            this.checkCollisionsChickenFromTopChicken();
            this.checkCollisionSmallChicken();
        }, 1000 / 60);

    }

    checkThrowObjects() {
        if (this.keyboard.D && this.bottleAmount > 0 && this.throwable) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.bottleAmount--;
            this.statusBarBottles.setPercentage(this.bottleAmount);
            this.checkBottleDirection(bottle);
            this.throwable = false;
            setInterval(() => {
                this.throwTime++;
                if(this.throwTime > 25) {
                    this.throwable = true;
                    this.throwTime = 0;
                }
            }, 100);
            
        }
    }


    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !enemy.dead) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy)
            }
            if (this.character.isColliding(enemy) && enemy instanceof Endboss) {
                this.character.hitByEndboss();
            }
        });

        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.bottle_sound.play();
                this.bottleAmount++;
                this.hideStuff(bottle);
                this.statusBarBottles.setPercentage(this.bottleAmount);

            }
        }
        );

        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.coin_sound.play();
                this.coinAmount++;
                this.hideStuff(coin);
                this.statusBarCoins.setPercentage(this.coinAmount);

            }
        }
        );

    }

    checkCollisionsChickenFromTopChicken() {
        this.level.enemies.forEach((enemy) => {
            if (this.isCollidingFromAbove(enemy) && enemy instanceof Chicken) {
                enemy.hit();
                enemy.dead = true;
                this.dead_chicken.play();
                this.killedChicken++;
            }
        });
    }

    checkCollisionSmallChicken() {
        this.level.enemies.forEach((enemy) => {
            if (this.isCollidingFromAbove(enemy) && enemy instanceof SmallChicken) {
                enemy.hit();
                enemy.dead = true;
                this.dead_chicken.play();
                this.killedSmallChicken++;
            }
        })
    }

    isCollidingFromAbove(mo) {
        return this.character.isColliding(mo) &&
            this.character.isAboveGround() &&
            !this.keyboard.UP &&
            !mo.dead &&
            !this.character.isHurt()
    }

    checkBottleDirection(bottle) {
        if (this.character.otherDirection) {
            bottle.x *= -1;
            bottle.x = this.character.x;
            setInterval(() => {
                bottle.x -= 20;
            }, 25);
        }
    }

    checkCollisionsBottleWithEndboss() {
        this.throwableObjects.forEach((throwableObjects) => {
            if (this.isCollidingEndboss(throwableObjects)) {
                this.endboss.hit();
                this.endboss_hit.play();
                this.collidesWithEndboss = true;
            }
        });
    }

    isCollidingEndboss(throwableObjects) {
        return this.endboss.isColliding(throwableObjects) &&
            throwableObjects.heigth != 0 &&
            throwableObjects.width != 0
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);


        this.addObjectsToMap(this.level.backgroundObjects);

        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBarCoins);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBarBottles);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);


        this.ctx.translate(-this.camera_x, 0);


        // Draw() wird immer wieder aufgerufen. "this" erkennt er innerhalb der Fkt nicht, deswegen wurde die Variable "self" dafür erstellt.
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {  //mo steht für moveable object
        if (mo.otherDirection) {
            this.flipImage(mo);
        }


        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);

        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    hideStuff(stuff) {
        stuff.height = 0;
        stuff.width = 0;
        stuff.y = 500;
    }


}