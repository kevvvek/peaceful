
export default class MainScene extends Phaser.Scene {
    constructor() {
        super("main");
    }
    create() {
        const start = this.add.text(this.game.canvas.width / 2, this.game.canvas.height / 2, 'Start', { color: '#fff', align: "center" }).setOrigin(0.5, 0.5);
        start.setInteractive();
        start.on("pointerup", () => {
            this.game.scene.start("game");
        });

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