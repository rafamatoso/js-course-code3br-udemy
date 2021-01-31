const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// A pasta atual servirá os arquivos estáticos
app.use(express.static("."));
// Para qualquer requisição que chegar, usará o urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Transforma o objeto parseado em json
app.use(bodyParser.json());

// Vai interpretar o formulário que vem do arquivo de upload
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("arquivo");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.end("Ocorreu um erro no upload de arquivo.");
    }
    res.end("Upload realizado com sucesso.");
  });
});

app.post("/formulario", (req, res) => {
  res.send({ ...req.body, id: 1 });
});

app.listen(8080, () => console.log("Executando..."));
