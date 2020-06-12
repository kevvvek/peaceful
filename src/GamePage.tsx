import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GameTile } from "./GameTile";
export interface GameTileSetting {
    row: number;
    col: number;
}
export interface GameSetting {
    tiles: GameTileSetting[]
}

export const GamePage: React.FC = () => {
    const [game, setGame] = useState<GameSetting>();
    useEffect(() => {
        const newGame: GameSetting = { tiles: [] };
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                newGame.tiles.push({ row: row, col: col })
            }
        }
        setGame(newGame);
    }, []);

    return <div className="game-page">
        {game?.tiles.map(tile => <GameTile tile={tile} game={game} />)}
    </div>
}