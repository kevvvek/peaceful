import GameSetting from "./GameSetting";
import DefaultGameSetting from "./DefaultGameSetting";


export class GameManager {
    gameSetting!: GameSetting;

    loadDefault() {
        this.gameSetting = new DefaultGameSetting();
    }


}