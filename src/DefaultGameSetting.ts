import GameSetting from "./GameSetting";

export default class DefaultGameSetting extends GameSetting {
    constructor() {
        super();
        this.column = 3;
        this.row = 4;
        this.tiles = [];

        this.initialize();
    }
}