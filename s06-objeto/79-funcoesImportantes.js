const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
};

// Gera um array com os valores das chaves do objeto
console.log(Object.keys(pessoa));
// Gera um array com apenas os valores para cada chave
console.log(Object.values(pessoa));
// Gera um array com cada valor de chave/valor
console.log(Object.entries(pessoa));

// Forma 1
Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`);
});

// Forma 2
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true, // torna visível quando se usa .keys()
  writable: false, // pode ser inscrito
  value: '01/01/2019' // valor de origem
});

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015) -> Concatena os valores dos objetos
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);
