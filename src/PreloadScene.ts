
export class PreloadScene extends Phaser.Scene {
    init() {
        this.scale.scaleMode = Phaser.Scale.ScaleModes.RESIZE;
    }
    preload() {
        //this.load.image("background", "unsplash/publicisaac-quesada-1AyqZcC7zSg-unsplash.jpg");
        this.load.image("background", "background.jpg");
        //this.add.image(0, 0, "background").setOrigin(0.5, 0.5);
    }
    create() {
        this.add.image(0, 0, "background").setOrigin(0.5, 0.5);
        this.game.scene.start("main");
    }
}