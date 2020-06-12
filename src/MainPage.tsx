import React, { useEffect } from "react";
import { useState } from "react";
import { MainMenuCard } from "./MainMenuCard";
import { GamePage } from "./GamePage";


export const MainPage : React.FC = () => {
    const [isShowMenu, setIsShowMenu] = useState(true);
    const onAction= (action:string) => {
        setIsShowMenu(false);
    }

    if (isShowMenu) {
        return <MainMenuCard  onAction={onAction}/>;
    }

    return <GamePage />;
}