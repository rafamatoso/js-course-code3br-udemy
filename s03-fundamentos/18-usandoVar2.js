// Só existe escopo de bloco para variável var dentro de uma função
// Caso não, será considerado escopo global
var numero = 1;
{
  var numero = 2;
  console.log("dentro = ", numero);
}
console.log("fora = ", numero);
