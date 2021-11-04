const http = require("http");

const server = http.createServer((req, res) => {
    console.log("J'ai reçu une requête.");
    res.write("Bonjour !");
    res.end();

    return res;
});


server.listen(3000);