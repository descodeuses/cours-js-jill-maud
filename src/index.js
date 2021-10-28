import React from "react";
import ReactDOM from "react-dom";
import SelectStep from "./SelectStep";
import ScoreBoard from "./ScoreBoard";
import RoundResult from "./RoundResult";

export const PIERRE = "p";
export const FEUILLE = "f";
export const CISEAU = "c";
const MANCHES_VICTORIEUSES = 3;


function mancheGagnante(coup) {
    let coupOrdinateur;
    let hasard = Math.floor(Math.random() * 3);

    switch (hasard) {
        case 0:
            coupOrdinateur = PIERRE;
            break;
        case 1:
            coupOrdinateur = FEUILLE;
            break;
        case 2:
            coupOrdinateur = CISEAU;
            break;
    }

    if ((coup === FEUILLE && coupOrdinateur === PIERRE) ||
        (coup === CISEAU && coupOrdinateur === FEUILLE) ||
        (coup === PIERRE && coupOrdinateur === CISEAU)) {
        /**
         * coup - coupOrdinateur === 1 || coup - coupOrdinateur == -2
         */
        return true;
    } else if (coup === coupOrdinateur) {
        return null;
    } else  {
        return false;
    }
}

const App = () => {
    const GAME_STATES = {
        WAITING: 0,
        WIN: 1,
        LOSE: 2,
        TIE: 3
    }

    const [scoreJoueuse, setScoreJoueuse] = React.useState(0);
    const [scoreOrdi, setScoreOrdi] = React.useState(0);
    const [gameState, setGameState] = React.useState(GAME_STATES.WAITING);

    function jouer(coup) {
        let resultatManche = mancheGagnante(coup);

        if (resultatManche === true) {
            // la joueuse a gagné
            let nouveauScore = scoreJoueuse + 1
            setScoreJoueuse(nouveauScore);
            setGameState(GAME_STATES.WIN);
        } else if (resultatManche === false) {
            let nouveauScore = scoreOrdi + 1;
            setScoreOrdi(nouveauScore);
            setGameState(GAME_STATES.LOSE)
        } else {
            setGameState(GAME_STATES.TIE)
        }
    }

    let blockVictoire;
    let gameIsOver = false;

    if (scoreJoueuse == MANCHES_VICTORIEUSES) {
        blockVictoire = "Vous avez gagné !";
        gameIsOver = true;
    } else if (scoreOrdi == MANCHES_VICTORIEUSES) {
        blockVictoire = "L'ordi a gagné !";
        gameIsOver = true;
    }

    let mainDivStyle = {
        backgroundColor: "#D3CFFF",
        height: "100%"
    };

    const blockGame = (gameState === GAME_STATES.WAITING) ?
        <SelectStep jouer={jouer} /> :
        <RoundResult gameState={gameState}/>;

    return (
        <div style={mainDivStyle}>
            <ScoreBoard scoreJoueuse={scoreJoueuse} scoreOrdi={scoreOrdi} />
            {gameIsOver ? blockVictoire : blockGame}
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("react-app"));
