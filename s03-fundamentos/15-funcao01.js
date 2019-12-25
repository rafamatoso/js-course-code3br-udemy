// Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 3, 4, 5, 6);
imprimirSoma();

// Funcao com retorno
function soma(a, b = 0) {
  // Feature em b que permite que um parametro tenha um valor padrão caso não seja passado na chamada
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());
