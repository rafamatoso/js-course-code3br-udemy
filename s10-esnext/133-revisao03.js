// ES8: Obejct.values / Object.entries

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na Notação Literal
const nome = 'Carla';
const pessoa = {
  nome,
  ola() {
    return 'Oi galera';
  }
};

console.log(pessoa.nome, pessoa.ola());

// Class
class Animal {
  correr() {
    return true;
  }
}
class Cachorro extends Animal {
  latir() {
    return 'Au Au!';
  }
}

const cachorro1 = new Cachorro();

console.log(cachorro1.latir(), cachorro1.correr());
