// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' };
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana' };

// Os atributos poderão ser reatribuídos, mas o apontamento em memória, não

// Congela o objeto, impedindo mudanças
Object.freeze(pessoa);

pessoa.nome = 'Maria';
console.log(pessoa.nome);

const pessoaConstante = Object.freeze({ nome: 'João' });
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante);
