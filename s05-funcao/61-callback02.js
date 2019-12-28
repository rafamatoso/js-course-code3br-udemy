const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem Callback

let notasBaixas = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  }
}
console.log(notasBaixas);

// Com Callback
const notasBaixas2 = notas.filter(function(nota) {
  return nota < 7;
}); // O array original não é alterado

console.log(notasBaixas2);

// Com Callback + Arrow Function
const notasBaixa3 = notas.filter(nota => nota < 7);
console.log(notasBaixa3);

// Mesmo exemplo acima de forma mais elegante
const notasMenorQue7 = nota => nota < 7;
const notasBaixa4 = notas.filter(notasMenorQue7);
console.log(notasBaixa4);
