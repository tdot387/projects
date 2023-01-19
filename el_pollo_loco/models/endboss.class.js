class Endboss extends MoveableObject {

    height = 400;
    width = 250;
    y = 60;
    hadFirstContact = false;

    offset = {
        top: 80,
        bottom: 20,
        left: 20,
        right: 30
    }

    IMAGES_SPAWNING = [
        './img/4_enemie_boss_chicken/2_alert/G5.png',
        './img/4_enemie_boss_chicken/2_alert/G6.png',
        './img/4_enemie_boss_chicken/2_alert/G7.png',
        './img/4_enemie_boss_chicken/2_alert/G8.png',
        './img/4_enemie_boss_chicken/2_alert/G9.png',
        './img/4_enemie_boss_chicken/2_alert/G10.png',
        './img/4_enemie_boss_chicken/2_alert/G11.png',
        './img/4_enemie_boss_chicken/2_alert/G12.png',

    ];

    IMAGES_WALKING = [
        './img/4_enemie_boss_chicken/1_walk/G1.png',
        './img/4_enemie_boss_chicken/1_walk/G2.png',
        './img/4_enemie_boss_chicken/1_walk/G3.png',
        './img/4_enemie_boss_chicken/1_walk/G4.png'

    ];

    constructor() {
        super().loadImage(this.IMAGES_SPAWNING[0]);
        this.loadImages(this.IMAGES_SPAWNING);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 3900;
        this.animate();
    }

    animate() {
        setInterval(() => {
            
            if(!this.hadFirstContact) {
                this.playAnimation(this.IMAGES_SPAWNING);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }

            if(world.character.x > 3550) {
                this.hadFirstContact = true;
            }

        }, 150);
    }
}