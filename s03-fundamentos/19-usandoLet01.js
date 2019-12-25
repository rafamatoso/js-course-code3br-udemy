// No caso abaixo, o escopo interno tem preferência para variavel let,
// caso não, a variável assume o valor do escopo acima (let tem escopo de bloco)
var numero = 1;
{
  let numero = 2;
  console.log("dentro =", numero);
}
console.log("fora =", numero);
