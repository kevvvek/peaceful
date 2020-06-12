import React from "react";


interface MainMenuCardProps {
    onAction: (action:string) => void;
}
export const MainMenuCard: React.FC<MainMenuCardProps> = (props) => {
    const onStart = () => props.onAction("Start");
    return <div className="main-menu-card">
        <button onClick={onStart}>Start</button>
    </div>
};
