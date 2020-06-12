import React from "react";
import { GameTileSetting, GameSetting } from "./GamePage";

interface GameTileProps {
    game: GameSetting;
    tile: GameTileSetting;
}
export const GameTile: React.FC<GameTileProps> = (props) => {
    return <div className="game-tile" style={{ top: props.tile.row * 50, left: props.tile.col * 50 }}>
        ({props.tile.row},{props.tile.col})
    </div>
}