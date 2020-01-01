const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // Remove o último elemento do Array
console.log(pilotos);

pilotos.push('Verstappen'); // Adiciona um elemento na última posição
console.log(pilotos);

pilotos.shift(); // Remove primeiro elemento
console.log(pilotos);

pilotos.unshift('Hamilton'); // adiciona na primeira posição
console.log(pilotos);

// splice() pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);
// remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // Novo array
console.log(algunsPilotos1);

// slice() -> pega parte de um array (Não pega o elemento do último parâmetro, e sim o anterios (n-1))
const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
