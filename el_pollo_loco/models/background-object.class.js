class BackgroundObject extends MoveableObject {


    width = 720;
    height = 400;
    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height; // 480 - 400
    }

}