const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// A pasta atual servirá os arquivos estáticos
app.use(express.static("."));
// Para qualquer requisição que chegar, usará o urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Transforma o objeto parseado em json
app.use(bodyParser.json());

app.get("/teste", (req, res) => res.send("Ok"));
app.listen(8080, () => console.log("Executando..."));
