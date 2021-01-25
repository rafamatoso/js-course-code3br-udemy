// Set não aceita repetição e não é indexado
const times = new Set();
times.add('Sport');
times
  .add('Sport')
  .add('Palmeiras')
  .add('Corinthians');
times.add('Flamídia');

console.log(times);
console.log(times.size);
console.log(times.has('sport'));
console.log(times.has('Sport'));
times.delete('Flamídia');
console.log(times.has('Flamídia'));

console.log(times);

const numeros = [1, 2, 3, 4, 1, 3];
const numerosSet = new Set(numeros);
console.log(numerosSet);
