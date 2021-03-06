import { BaseScene } from "./BaseScene";

export default class LoadingScene extends BaseScene {
    init() {
        //this.scale.scaleMode = Phaser.Scale.ScaleModes.RESIZE;
    }
    preload() {
        this.addBackground("splash");

        this.load.image("background", "assets/unsplash/isaac-quesada-1AyqZcC7zSg-unsplash.jpg");
        this.load.image("tile", "assets/last-guardian-sprites/man4_fr1.gif");

        this.load.spritesheet("world", "assets/Pipoya RPG World Tileset 48x48 40x40 32x32/32x32/pipo-map001.png",
            { frameWidth: 32, frameHeight: 32 });

        this.load.tilemapTiledJSON('map', 'maps/200710.json');
        this.load.image('tiles', 'assets/Pipoya RPG World Tileset 48x48 40x40 32x32/32x32/pipo-map001.png');

        // const map = this.make.tilemap({ key: "map" });
        // const layer = map.createStaticLayer(0, "pipo-map001", 0, 0);
    }
    create() {
        setTimeout(() => {
            this.scene.start("main");
        }, 1000);
    }
}