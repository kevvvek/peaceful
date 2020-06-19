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
}