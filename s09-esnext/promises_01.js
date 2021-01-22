let p = new Promise(function (resolve, reject) {
  resolve(["Rafael", "Maria", "Renata"]);
});

const primeiroElemento = (array) => array[0];

const primeiraLetra = (string) => string[0];

const letraMinuscula = (letra) => letra.toLowerCase();

p.then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(console.log);
