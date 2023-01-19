class Coins extends MoveableObject {

    height = 200;
    width = 200;

    offset = {
        top: 70,
        bottom: 70,
        left: 50,
        right: 50,
    };

    IMAGES_MOVING = [
        './img/8_coin/coin_1.png',
        './img/8_coin/coin_2.png',
    ];

    constructor(y) {
        super().loadImage(this.IMAGES_MOVING[0]);
        this.loadImages(this.IMAGES_MOVING);
        this.x = 500 + Math.random() * 3000;
        this.y = y;

        this.animate();
    }

    animate() {

        setInterval(() => {
            this.playAnimation(this.IMAGES_MOVING);
        }, 400);
    }


}