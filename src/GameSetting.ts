export default class GameSetting {
    column: number = 0
    row: number = 0

    tiles: GameTile[] = []


    initialize() {
        for (let x = 0; x < this.column; x++) {
            for (let y = 0; y < this.row; y++) {
                let tile = this.tiles.filter(a => a.x == x && a.y == y)[0];
                if (!tile) {
                    tile = { x: x, y: y };
                    this.tiles.push(tile);
                }
            }
        }
    }
}

export class GameTile {
    x: number = 0
    y: number = 0
    terrane?: GameTerrane
    building?: GameBuilding
}

class GameTerrane {
    terraneCode: string = ""
}

class GameBuilding {
    buildingCode: string = ""
    player: number = 0
}

