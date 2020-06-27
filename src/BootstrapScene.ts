import { BaseScene } from "./BaseScene";

export default class BootstrapScene extends BaseScene {
    init() {
        this.scale.scaleMode = Phaser.Scale.ScaleModes.RESIZE;
    }
    preload() {
        this.add.text(this.game.canvas.width/2, this.game.canvas.height/2, "Loading...").setOrigin(0.5,0.5);
        this.load.image("splash", "splash.jpg");
    }
    create() {
        this.scene.start("loading");
    }
}