import React from "react";
import ReactDOM from "react-dom";

const PIERRE = "p";
const FEUILLE = "f";
const CISEAU = "c";
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

    return (
        <>
            <h1>Exo 1</h1>
            <p>{text}</p>
            <p>Score joueuse : {scoreJoueuse}</p>
            <p>Score ordi : {scoreOrdi}</p>
            {!gameIsOver ? <>
                <button onClick={() => jouer(PIERRE)}>Pierre</button>
                <button onClick={() => jouer(FEUILLE)}>Feuille</button>
                <button onClick={() => jouer(CISEAU)}>Ciseau</button>
            </> : <p>{blockVictoire}</p>
            }
        </>
    );
}

ReactDOM.render(<App/>, document.getElementById("react-app"));
