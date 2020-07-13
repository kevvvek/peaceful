import { BaseScene } from "./BaseScene";
import { GameManager } from "./GameManager";
import { GameTile } from "./GameSetting";

export default class GameScene extends BaseScene {
    gameManager!: GameManager;

    tileOffsetX: number = 10;
    tileOffsetY: number = 10;

    init(_gameManager: GameManager) {
        this.gameManager = _gameManager;
    }

    create() {
        this.addBackground("background");

        // this.gameManager?.gameSetting.tiles.forEach(tile => {
        //     this.add.sprite(this.getTileX(tile.x), 100 + this.getTileY(tile.y), "tile").setOrigin(0.5, 0.5);
        // });



        const map = this.make.tilemap({ key: 'map' });
        const tiles = map.addTilesetImage('pipo-map001', 'tiles', 32, 32);
        const ground = map.createStaticLayer('ground', tiles, 0, 0).setX(this.tileOffsetX).setY(this.tileOffsetY);

        //const tree = map.createStaticLayer('trees', tiles, 0, 0);

        this.gameManager?.gameSetting.tiles.forEach(tile => {
            if (tile.terrane) {
                this.drawTerrane(tile);
            }
            if (tile.building) {
                this.drawBuilding(tile);
            }
            // this.add.sprite(tile.x * 32 + this.tileOffsetX, tile.y * 32 + this.tileOffsetY, "tile").setOrigin(0, 0);
        });

    }

    drawTerrane(tile: GameTile) {
        if (tile.terrane?.terraneCode == "Tree") {
            this.add.sprite(tile.x * 32 + this.tileOffsetX, tile.y * 32 + this.tileOffsetY, "world", 10).setOrigin(0, 0);
        }
    }
    drawBuilding(tile: GameTile) {
        const building = tile.building;
        if (building?.buildingCode == "Castle") {
            const sprite = this.add.sprite(tile.x * 32 + this.tileOffsetX, tile.y * 32 + this.tileOffsetY, "world", 74).setOrigin(0, 0);
            if (building.player == 0) {
                sprite.setTint(0xcccccc);
            } else {
                sprite.setTint(0x333333);
            }
        }
    }

    tileSize: number = 50;
    // getTileX(x: number) {
    //     const start = (this.game.canvas.width / 2) - (this.gameManager.gameSetting.column - 1) / 2 * this.tileSize;
    //     return start + 50 * x;
    // }

    // getTileY(y: number) {
    //     return y * this.tileSize;
    // }
}