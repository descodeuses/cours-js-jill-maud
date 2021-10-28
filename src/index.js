import React from "react";
import ReactDOM from "react-dom";
import SelectStep from "./SelectStep";

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

const ScoreBoard = (props) => {
    let mainStyle = {
        backgroundColor: "#FFFFFF",
        position: "absolute",
        top: 0,
        right: 0,
        border: 0,
        padding: "20px 35px",
        fontSize: "64.248px",
        lineHeight: "83px",
    };

    return <div style={mainStyle}>
        <span style={{color: "#2818DF"}}>
            {props.scoreJoueuse}
            </span> - <span style={{color: "#DA1717"}}>
                {props.scoreOrdi}
            </span>
    </div>;
}

const App = () => {
    const [scoreJoueuse, setScoreJoueuse] = React.useState(0);
    const [scoreOrdi, setScoreOrdi] = React.useState(0);
    const [text, setText] = React.useState("");

    function jouer(coup) {
        let resultatManche = mancheGagnante(coup);

        if (resultatManche === true) {
            // la joueuse a gagné
            let nouveauScore = scoreJoueuse + 1
            setScoreJoueuse(nouveauScore);
            setText("Manche gagnée");
        } else if (resultatManche === false) {
            let nouveauScore = scoreOrdi + 1;
            setScoreOrdi(nouveauScore);
            setText("Manche perdue")
        } else {
            setText("Manche nulle")
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

    return (
        <div style={mainDivStyle}>
            <ScoreBoard scoreJoueuse={scoreJoueuse} scoreOrdi={scoreOrdi} />
            {text}
            {gameIsOver ? blockVictoire : <SelectStep jouer={jouer} />}
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("react-app"));
