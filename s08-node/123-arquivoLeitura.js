const fs = require('fs');

const caminho = __dirname + '/122-arquivo.json';

// Síncrono... Não recomendado, pois dependendo do tamanho do arquivo, ele vai "travar"
// o event loop do node, causando lag ou até travando o sistema
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// Assíncrono... Mais recomendado
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`);
});

// Leitura direta de arquivo json
const config = require('./122-arquivo.json');
console.log(config.db);

fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteúdo da Pasta...');
  console.log(arquivos);
});
