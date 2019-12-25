const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // Ao acessar um índice que não existe, o js reconhecerá como undefined

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({ id: 3 }, false, null, "teste"); // Adiciona elementos ao Array
console.log(valores);

console.log(valores.pop());
delete valores[0]; // Como Arrays são objetos, o delete apaga um atributo especificado
console.log(valores);

console.log(typeof valores); // Arrays são objetos
