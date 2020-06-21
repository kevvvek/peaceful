import { BaseScene } from "./BaseScene";

export default class LoadingScene extends BaseScene {
    init() {
        this.scale.scaleMode = Phaser.Scale.ScaleModes.RESIZE;
    }
    preload() {
        this.addBackground("splash");

        this.load.image("background", "unsplash/isaac-quesada-1AyqZcC7zSg-unsplash.jpg");
        this.load.image("tile", "last-guardian-sprites/man4_fr1.gif");
    }
    create() {
        setTimeout(() => {
            this.scene.start("main");
        }, 1000);
    }
}