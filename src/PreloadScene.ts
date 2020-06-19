import { BaseScene } from "./BaseScene";

export class PreloadScene extends BaseScene {
    init() {
        this.scale.scaleMode = Phaser.Scale.ScaleModes.RESIZE;
    }
    preload() {
        this.load.image("splash", "splash.jpg");
    }
    create() {
        this.addBackground("splash");
        this.scene.start("loading");
    }
}