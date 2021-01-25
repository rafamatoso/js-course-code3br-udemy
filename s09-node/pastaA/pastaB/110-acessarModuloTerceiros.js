const moduloA = require('../../106-moduloA');
console.log(moduloA.bemVindo);

const saudacao = require('saudacao');
console.log(saudacao.ola);

//const c = require('./pastaC/index');
const c = require('./pastaC');
console.log(c.ola2);

/*const http = require('http');
http
  .createServer((req, res) => {
    res.write('Bom dia!');
    res.end();
  })
  .listen(8080);*/
