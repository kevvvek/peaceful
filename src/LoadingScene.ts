export class LoadingScene extends Phaser.Scene {
    init() {
        this.scale.scaleMode = Phaser.Scale.ScaleModes.RESIZE;
    }
    preload() {
        this.load.image("background", "./unsplash/isaac-quesada-1AyqZcC7zSg-unsplash.jpg");
    }
    create() {
        this.scene.start("main");
    }
}