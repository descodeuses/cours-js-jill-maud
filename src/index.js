import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import SelectStep from "./SelectStep";
import ScoreBoard from "./ScoreBoard";
import RoundResult from "./RoundResult";
import axios from "axios";

export const PIERRE = "p";
export const FEUILLE = "f";
export const CISEAU = "c";
const MANCHES_VICTORIEUSES = 3;

export const GAME_STATES = {
    WAITING: 0,
    WIN: 1,
    LOSE: 2,
    TIE: 3,
    END_WIN: 4,
    END_LOSE: 5
}

const App = () => {
    const [scoreJoueuse, setScoreJoueuse] = React.useState(0);
    const [scoreOrdi, setScoreOrdi] = React.useState(0);
    const [gameState, setGameState] = React.useState(GAME_STATES.WAITING);

    function resetRound () {
        if (gameState === GAME_STATES.END_LOSE
            || gameState === GAME_STATES.END_WIN) {
            setScoreJoueuse(0)
            setScoreOrdi(0)
        }

        if (gameState !== GAME_STATES.WAITING) {
            setGameState(GAME_STATES.WAITING);
        }
    }

    async function jouer(coup) {
        let response = await axios.post("/api/jouer", { coup });
        let resultatManche = response.data;
        console.log(response.data);

        if (resultatManche === "GAGNE") {
            // la joueuse a gagné
            let nouveauScore = scoreJoueuse + 1;
            setScoreJoueuse(nouveauScore);
            if (nouveauScore === MANCHES_VICTORIEUSES) {
                setGameState(GAME_STATES.END_WIN)
            } else {
                setGameState(GAME_STATES.WIN);
            }
        } else if (resultatManche === "PERDU") {
            let nouveauScore = scoreOrdi + 1;
            setScoreOrdi(nouveauScore);

            if (nouveauScore === MANCHES_VICTORIEUSES) {
                setGameState(GAME_STATES.END_LOSE)
            } else {
                setGameState(GAME_STATES.LOSE)
            }
        } else {
            setGameState(GAME_STATES.TIE)
        }
    }

    const blockGame = (gameState === GAME_STATES.WAITING) ?
        <SelectStep jouer={jouer} /> :
        <RoundResult gameState={gameState} />;

    return (
        <div onClick={resetRound}>
            <style jsx>{`
                div {
                    background-color: #D3CFFF;
                    height: 100%;
                }
            `}
            </style>
            <ScoreBoard scoreJoueuse={scoreJoueuse} scoreOrdi={scoreOrdi} />
            {blockGame}
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("react-app"));


jouer();
