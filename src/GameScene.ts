import { create } from "domain"

export class GameScene extends Phaser.Scene {
    constructor() {
        super("game");
    }
    create() {
        this.add.text(50, 50, "Game");
    }
}