import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

import "phaser";
import MainScene from './MainScene';
import { MainPage } from './MainPage';
import { GameScene } from './GameScene';
import { PreloadScene } from './PreloadScene';
import { LoadingScene } from './LoadingScene';

const App: React.FC = () => {
  const app = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.CANVAS,
      height: 1080,
      width: 1920,
      scale: {
        mode: Phaser.Scale.ScaleModes.RESIZE,
      }
    }
    const game = new Phaser.Game(config);
    game.scene.add("preload", PreloadScene);
    game.scene.add("loading", LoadingScene);
    game.scene.add("main", MainScene);
    game.scene.add("game", GameScene);
    game.scene.start("preload");
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
