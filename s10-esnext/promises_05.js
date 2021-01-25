// Encadeamento de chamadas (chaining) com tratamento de erros

function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      con.log("ulala");
      if (Math.random() < chanceErro) {
        reject("Ocorreu um erro!");
      } else {
        resolve(valor);
      }
    } catch (e) {
      reject(e);
    }
  });
}

funcionarOuNao("Testando...", 0.5)
  .then((valor) => `Valor: ${valor}`)
  .then(
    (v) => consol.log(v),
    (err) => console.log(`Erro Específico: ${err}`)
  )
  .then(() => console.log("Quase Fim!"))
  .catch((err) => console.log(`Erro Geral: ${err}`))
  .then(() => console.log("Fim!"));
