{
  {
    {
      {
        var sera = "Será???"; // A variável sera fica visível fora do escopo
      }
    }
  }
}
console.log(sera);

function teste() {
  var local = 123;
  console.log(local); // Escopo dentro da função
}

teste();
console.log(local); // variavel local não é acessível fora da função
