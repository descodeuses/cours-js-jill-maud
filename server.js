const express = require("express");

const app = express();

app.get('/', (req, res) => {
    console.log("J'ai reçu une requête.");

    res.send("Bonjour");
});

app.get('/aurevoir', (req, res) => {
    res.send("Au revoir")
})

app.listen(3000);
