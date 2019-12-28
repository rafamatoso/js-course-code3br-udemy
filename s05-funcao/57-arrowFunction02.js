function Pessoa() {
  this.idade = 0;

  // Na função arrow, o this não varia dependendo do contexto, sempre será fixo no contexto léxico da função
  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

new Pessoa();
