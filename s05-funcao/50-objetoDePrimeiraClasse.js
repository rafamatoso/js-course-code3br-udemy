// Função em JS é uma First-Class Object (Citizens)
// Higher-Order Function

// Criar Função de forma literal
function fun1() {}

// Armazenamento de funções em variáveis
const fun2 = function() {};

// Armazenar num array
const array = [
  function(a, b) {
    return a + b;
  },
  fun1,
  fun2
];

console.log(array[0](2, 3));

// Armazenar num atributo de objeto
const obj = {};
obj.falar = function() {
  return "Opa";
};
console.log(obj.falar());

// Passar função como parâmetro
function run(fun) {
  fun();
}
run(function() {
  console.log("Executando...");
});

// Uma função pode retornar/conter uma função
function soma(a, b) {
  return function(c) {
    console.log(a + b + c);
  };
}
soma(2, 3)(4);
const resultadoMais = soma(2, 3);
resultadoMais(4);
