const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c };
console.log(obj1);
// ES6
const obj2 = { a, b, c };
console.log(obj2);

const nomeAtributo = 'nome';
const valorAtributo = 7.87;

const obj3 = {};
obj3[nomeAtributo] = valorAtributo;
console.log(obj3);

const obj4 = { [nomeAtributo]: valorAtributo };
console.log(obj4);

const obj5 = {
  funcao1: function() {
    // ...
  },
  // ES6 - Forma Reduzida de definir função dentro de um obj
  funcao2() {
    // ...
  }
};

console.log(obj5);
