import React from "react";
import { GAME_STATES } from "./index";

const RoundResult = (props) => {
    const {gameState}  = props;

    let textMessage = "";
    let color = "";
    if (gameState === GAME_STATES.WIN) {
        textMessage = "Gagné !"
        color = "#2818DF";
    } else if (gameState === GAME_STATES.LOSE) {
        textMessage = "Perdu !"
        color = "#DA1717"
    } else if (gameState === GAME_STATES.END_WIN) {
        textMessage = "Bravo ! Partie gagnée."
        color = "#2818DF";
    } else if (gameState === GAME_STATES.END_LOSE) {
        textMessage = "Désolé ! Partie perdue."
        color = "#DA1717"
    } else {
        textMessage = "Égalité !"
        color = "#333333"
    }

    let headingStyle = {
        fontSize: "69.0380px",
        fontWeight: 700,
        textTransform: "uppercase",
        color: color,
    };

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }

    return <div style={containerStyle}>
        <h1 style={headingStyle}>{textMessage}</h1>
    </div>
};

export default RoundResult;
