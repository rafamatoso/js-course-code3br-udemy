// Cadeia de protótipos (Prototype Chain)
Object.prototype.atributo0 = '0'; // Evitar esse tipo de manipulação no protótipo geral
const avo = { atributo1: 'A' };
const pai = { __proto__: avo, atributo2: 'B', atributo3: '3' };
const filho = { __proto__: pai, atributo3: 'C' };
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  }
};

const ferrari = {
  modelo: 'F40',
  velMax: 324 // Shadowing - variável de escopo mais interno sobrescreve a de escopo externo
};

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`; // O super chamará o método do protótipo
  }
};

Object.setPrototypeOf(ferrari, carro); // ferrari tem carro como protótipo
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());
