// setTimeout(() => {
//   console.log("Executando callback...");

//   setTimeout(() => {
//     console.log("Executando callback...");
//   }, 3000);
// }, 3000);

// melhorando o código acima usando Promises

function esperarPor(tempo) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("Executando Promise");
      resolve();
    }, tempo);
  });
}

esperarPor(10000)
  .then(() => esperarPor(2000))
  .then(esperarPor(2000));
