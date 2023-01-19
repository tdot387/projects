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

    throwableObjects = [];
    bottleAmount = 0;
    coinAmount = 0;
    
    coin_sound = new Audio('audio/collect_coin.mp3');
    bottle_sound = new Audio('audio/collect_bottle.mp3');
    bg_music = new Audio('audio/bg-music.mp3');
    dead_chicken = new Audio('audio/dead_chicken.mp3');

    killedChicken = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        /*this.bg_music.play();*/
    }


    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);

    }

    checkThrowObjects() {
        if (this.keyboard.D && this.bottleAmount > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.bottleAmount--;
            this.statusBarBottles.setPercentage(this.bottleAmount);
            this.checkBottleDirection(bottle);
        }
    }


    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy)
            }
        });

        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.bottle_sound.play();
                this.bottleAmount++;
                this.hideStuff(bottle);
                this.statusBarBottles.setPercentage(this.bottleAmount)

            }
        }
        );

        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.coin_sound.play();
                this.coinAmount++;
                this.hideStuff(coin);
                this.statusBarCoins.setPercentage(this.coinAmount)

            }
        }
        );

    }

    checkBottleDirection(bottle) {
        if (this.character.otherDirection) {
            bottle.speedX *= -1;
            bottle.x = this.character.x;
        }
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