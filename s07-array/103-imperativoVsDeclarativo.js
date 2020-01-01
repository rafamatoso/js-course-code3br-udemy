const alunos = [
  { nome: 'João', nota: 7.9 },
  { nome: 'Maria', nota: 9.2 },
  { nome: 'Pedro', nota: 6.4 },
  { nome: 'Sandra', nota: 8.2 }
];

// Abordagem Imperativa - Como tem que ser feito
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);

// Abordagem Declarativa - O que tem de ser feito
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);
