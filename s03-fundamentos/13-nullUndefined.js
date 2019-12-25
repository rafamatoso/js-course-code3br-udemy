let valor; // Não inicializado
console.log(valor);

valor = null; // Ausẽncia de valor - sempre quando quer zerar uma variável, usar nulo
console.log(valor);
// console.log(valor.toString()); // Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; // Evitar atribuir undefined, deixe para a linguagem definir isso.
console.log(!!produto.preco);
// delete produto.preco;
console.log(produto);

produto.preco = null; // Sem preço, usamos quando queremos "zerar" uma variável
console.log(!!produto.preco);
console.log(produto);
