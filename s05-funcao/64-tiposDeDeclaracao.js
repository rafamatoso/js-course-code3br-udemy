// Function Declaration
console.log(soma(3, 4));
/* Obs: ao se declarar uma função com o padrão abaixo, 
o node ou qualquer outro interpretador carregará 
todas as funções primeiro, sendo possível chamar 
a função antes mesmo dela ser "declarada"
*/
function soma(x, y) {
  return x + y;
}

// Function Expression
const sub = function(x, y) {
  return x - y;
};
console.log(sub(4, 3));

// Named Function Expression
const mult = function mult(x, y) {
  return x * y;
};
