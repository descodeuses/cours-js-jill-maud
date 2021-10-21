import React from "react";
import ReactDOM from "react-dom";

function display(text) {
    document.getElementById("textContent").innerHTML += text + "<br/>";
}

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


let scoreJoueuse = 0;
let scoreOrdi = 0


// i = le compteur de manche
// la boucle continue tant qu'aucun des joueurs n'a atteint 3
function jouer(coup) {
    let resultatManche = mancheGagnante(coup)
    
    if (resultatManche === true) {
        // la joueuse a gagné
        scoreJoueuse++;
        display("Manche gagnée");
    } else if (resultatManche === false) {
        scoreOrdi++;
        display("Manche perdue")
    } else {
        display("Manche nulle")
    }

    if (scoreJoueuse === MANCHES_VICTORIEUSES) {
        display("La joueuse a gagné")
    } else if (scoreOrdi === MANCHES_VICTORIEUSES) {
        display("L'ordinateur a gagné")
    }    
}


/*
Les 3 possibilités pour passer une fonction en paramètre
*/
function jouerPierre() {
    jouer(PIERRE, variableinconue)
}
/*
document.getElementById("pierre")
    .addEventListener("click", jouerPierre)

document.getElementById("feuille")
    .addEventListener("click", function() {
        jouer(FEUILLE)
    })

document.getElementById("ciseau")
    .addEventListener("click", () => jouer(CISEAU))
    */

const App = () => {
    const [score, setScore] = React.useState(0);

    console.log("Nouveau rendu avec score " +score);

    return (
        <>
            <h1>Exo 1</h1>
            <p id="textContent"> </p>
            <button id="pierre">Pierre</button>
            <button id="feuille">Feuille</button>
            <button id="ciseau">Ciseau</button>
            <p>{score}</p>
            <button onClick={() => setScore(score + 1)}>Score +1</button>
        </>
    );
}

ReactDOM.render(<App/>, document.getElementById("react-app"));
