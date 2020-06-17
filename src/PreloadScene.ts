
export class PreloadScene extends Phaser.Scene {
    init() {
        this.scale.scaleMode = Phaser.Scale.ScaleModes.RESIZE;
    }
    preload() {
        this.load.image("splash", "./splash.jpg");
    }
    create() {
        this.add.image(0, 0, "splash").setOrigin(0.5, 0.5);
        this.game.scene.start("loading");
    }
}