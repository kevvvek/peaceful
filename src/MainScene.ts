import { BaseScene } from "./BaseScene";
import { GameManager } from "./GameManager";

export default class MainScene extends BaseScene {
    constructor() {
        super("main");
    }
    create() {
        this.addBackground("background");
        const start = this.addButton(0.5, "Start");

        start.on("pointerup", () => {
            const gameManager = new GameManager();
            gameManager.loadDefault();
            this.game.scene.start("game", gameManager);
        });

        // print screen
        window.onkeyup = (e: any) => {
            if (e.keyCode === 44) {
                this.game.renderer.snapshot((arg) => {
                    let image = arg as HTMLImageElement;
                    image.style.width = `${this.game.canvas.width}px`;
                    image.style.height = `${this.game.canvas.height}px`;
                    image.style.paddingLeft = '2px';
                    // snapHistory.push(image);
                    // console.log('snap!');
                    document.body.appendChild(image);
                });
            }
        };
    }
}