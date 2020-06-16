import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

import "phaser";
import MainScene from './MainScene';
import { MainPage } from './MainPage';
import { GameScene } from './GameScene';

const App: React.FC = () => {
  const app = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      height: 600,
      width: 400,
      scale: {
        autoCenter: Phaser.Scale.Center.CENTER_BOTH,
      }
    }
    const game = new Phaser.Game(config);
    game.scene.add("main", MainScene);
    game.scene.add("game", GameScene);
    game.scene.start("main");
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div ref={app} className="App">
        {/* <MainPage /> */}
      </div>
    </div>
  );
}

export default App;
