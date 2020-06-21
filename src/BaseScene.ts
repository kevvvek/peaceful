export class BaseScene extends Phaser.Scene {
    addBackground(key: string) {
        const image = this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2, key);
        const xRatio = this.game.canvas.width as number / image.width;
        const yRatio = this.game.canvas.height as number / image.height;

        image.setOrigin(0.5, 0.5);

        if (xRatio >= yRatio) {
            image.setScale(xRatio, xRatio);
        }
        if (yRatio > xRatio) {
            image.setScale(yRatio, yRatio);
        }
    }

    // y: 0-1
    addButton(yRatio: number, text: string) {
        const height = 50;
        const y = this.game.canvas.height * yRatio - height / 2;
        const x = 15;
        const width = this.game.canvas.width - 30;

        const graphics = this.add.graphics();
        graphics.fillStyle(0x888888, 0.5);
        graphics.fillRoundedRect(x, y, width, height, 10);

        const button = this.add.text(this.game.canvas.width / 2, this.game.canvas.height / 2,
            text, { color: '#fff', align: "center", fontStyle: "bold" }).setOrigin(0.5, 0.5);
        button.setInteractive();
        return button;
    }
}