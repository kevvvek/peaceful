import { BaseScene } from "./BaseScene";
import { GameManager } from "./GameManager";

export default class GameScene extends BaseScene {
    gameManager!: GameManager;

    init(_gameManager: GameManager) {
        this.gameManager = _gameManager;
    }

    create() {
        this.addBackground("background");

        this.gameManager?.gameSetting.tiles.forEach(tile => {
            this.add.sprite(this.getTileX(tile.x), 100 + this.getTileY(tile.y), "tile").setOrigin(0.5, 0.5);
        })
    }

    tileSize: number = 50;
    getTileX(x: number) {
        const start = (this.game.canvas.width / 2) - (this.gameManager.gameSetting.column - 1) / 2 * this.tileSize;
        return start + 50 * x;
    }

    getTileY(y: number) {
        return y * this.tileSize;
    }
}