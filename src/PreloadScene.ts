import { BaseScene } from "./BaseScene";

export default class PreloadScene extends BaseScene {
    init() {
        this.scale.scaleMode = Phaser.Scale.ScaleModes.RESIZE;
    }
    preload() {
        this.load.image("splash", "splash.jpg");
    }
    create() {
        this.scene.start("loading");
    }
}