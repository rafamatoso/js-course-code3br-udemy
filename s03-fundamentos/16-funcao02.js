// Armazenando uma função numa variável
const imprimirSoma = function(a, b) {
  console.log(a + b);
};
imprimirSoma(2, 3);

// Armazenando uma função Arrow numa variável
const soma = (a, b) => {
  return a + b;
};
console.log(soma(2, 3));

// Retorno implícito (Quando o escopo da função tem apenas uma linha, geralmente o retorno)
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);
imprimir2("legal!!!");
