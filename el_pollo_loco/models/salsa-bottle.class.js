class SalsaBottle extends MoveableObject {

    height = 100;
    width = 100;
    y = 340;

    offset = {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
    };

    IMAGES_MOVING = [
        './img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        './img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    constructor() {
        super().loadImage('./img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.loadImages(this.IMAGES_MOVING);
        this.x = 500 + Math.random() * 1000; // Zahl zwischen 200 und 700

        this.animate();
    }

    animate() {

        setInterval(() => {
            this.playAnimation(this.IMAGES_MOVING);
        }, 200);
    }

}