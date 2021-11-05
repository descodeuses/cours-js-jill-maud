const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PIERRE = "p";
const FEUILLE = "f";
const CISEAU = "c";

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/public", express.static(__dirname + "/public"));
app.use("/dist", express.static(__dirname + "/dist"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/api/jouer', (req, res) => {
    let coup = req.body.coup;
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
        return res.send("GAGNE");
    } else if (coup === coupOrdinateur) {
        return res.send("NUL");
    } else  {
        return res.send("PERDU");
    }
});

app.listen(3000);
