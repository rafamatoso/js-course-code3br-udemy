const prod1 = {}; // Forma literal de um objeto JS
prod1.nome = "Celular Ultra Mega"; // Objeto é uma coleção de chaves valor no JS
prod1.preco = 4998.9;
prod1["Desconto Legal"] = 0.4; // Evitar atributos com espaço

console.log(prod1);

const prod2 = {
  nome: "Camisa Polo",
  preco: 79.9,
  obj: {
    blabla: 1,
    obj: {
      blabla: 2
    }
  }
};

console.log(prod2);
