import React from "react";
import { GAME_STATES } from "./index";

const RoundResult = (props) => {
    const {gameState}  = props;

    let textMessage;
    if (gameState == GAME_STATES.WIN) {
        textMessage = "Gagné !"
    } else if (gameState === GAME_STATES.LOSE) {
        textMessage = "Perdu !"
    } else {
        textMessage = "Égalité !"
    }

    return <>
        {textMessage}
    </>
};

export default RoundResult;
