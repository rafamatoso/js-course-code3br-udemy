function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();
/* Quando se instancia objetos diferentes a partir da mesma função geradora
  os protótipos desses objetos apontarão para mesma função geradora
  a partir do atributo __proto__*/
console.log(obj1.__proto__ === obj2.__proto__);
/*  Quando se instancia um objeto usando o new (função construtora)
  o protótipo do objeto aponta para a "função que você criou".prototype*/
console.log(MeuObjeto.prototype === obj1.__proto__);

/* Qualquer objeto derivado de MeuObjeto terá no a partir de seu pai,
  acesso ao atributo nome*/
MeuObjeto.prototype.nome = 'Anônimo';
// Mesmo caso acima
MeuObjeto.prototype.falar = function() {
  console.log(`Bom dia! Meu nome é ${this.nome}`);
};

obj1.falar();

obj2.nome = 'Rafael';
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = 'Obj3';
obj3.falar();

// Resumindo
// Quando o objeto é instanciado a partir de uma função, eles são iguais
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype);
/* Uma função tem um protótipo e tem uma referência para o __proto__
  que vai apontar para Function.prototype */
console.log(MeuObjeto.__proto__ === Function.prototype);
// O protótipo do protótipo de uma função aponta para Object.prototype
console.log(Function.prototype.__proto__ === Object.prototype);
// Não existe mais objetos após Object.prototype
console.log(Object.prototype.__proto__ === null);
