class SmallChicken extends MoveableObject {

    height = 50;
    width = 50;
    y = 70;
    speed = 50;
    groundPos = 360;
    IMAGES_WALKING = [
        './img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 500 + Math.random() * 3000; // Zahl zwischen 400 und 700
        this.speed = 0.35 + Math.random() * 0.7;

        this.applyGravity();
        this.chickenJump();
        this.animate();

    }


    animate() {
        setInterval(() => {
            this.moveLeft();

        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    chickenJump() {
        setInterval(() => {
            this.jump();
        }, 1000);
    }
}