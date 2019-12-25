const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (i in notas) {
  console.log(`i = ${i},`, `nota = ${notas[i]}`);
}

const pessoa = {
  nome: "Rafael",
  sobrenome: "Matoso",
  idade: 31,
  peso: 70
};

// For In padrão, diferente do exemplo mostrado no curso
for (const atributo in pessoa) {
  if (pessoa.hasOwnProperty(atributo)) {
    // Característica diferente a do curso
    console.log(`${atributo} = ${pessoa[atributo]}`);
  }
}
