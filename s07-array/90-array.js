// No JS, array são objetos e possuem estrutura indexada!

console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // retorna undefined

aprovados[3] = 'Paulo';
aprovados.push('Abia');
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8] === null);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort(); // nesse caso, o array original foi ordenado
console.log(aprovados);

delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana'];
// .splice() -> parametro 1: índice do elemento que será retirado primeiro
// parametro 2: serão retirados os dados até o índice desse elemento
// outros parâmetros: o array será reposto com esses parâmetros
aprovados.splice(1, 2, 'Marta', 'Manuela');
console.log(aprovados);
