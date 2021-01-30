function novoElemento(tagName, className) {
  const el = document.createElement(tagName);
  el.className = className;
  return el;
}

function Barreira(reversa = false) {
  this.el = novoElemento("div", "barreira");

  const borda = novoElemento("div", "borda");
  const corpo = novoElemento("div", "corpo");
  this.el.appendChild(reversa ? corpo : borda);
  this.el.appendChild(reversa ? borda : corpo);

  this.setAltura = (altura) => (corpo.style.height = `${altura}px`);
}

// const b = new Barreira(true);
// b.setAltura(200);
// document.querySelector("[wm-flappy]").appendChild(b.el);

function ParDeBarreiras(altura, abertura, x) {
  this.el = novoElemento("div", "par-de-barreiras");

  this.superior = new Barreira(true);
  this.inferior = new Barreira(false);

  this.el.appendChild(this.superior.el);
  this.el.appendChild(this.inferior.el);

  this.sortearAbertura = () => {
    const alturaSuperior = Math.random() * (altura - abertura);
    const alturaInferior = altura - abertura - alturaSuperior;
    this.superior.setAltura(alturaSuperior);
    this.inferior.setAltura(alturaInferior);
  };

  this.getX = () => parseInt(this.el.style.left.split("px")[0]);
  this.setX = (x) => (this.el.style.left = `${x}px`);
  this.getLargura = () => this.el.clientWidth;

  this.sortearAbertura();
  this.setX(x);
}

// const b = new ParDeBarreiras(700, 200, 400);
// document.querySelector("[wm-flappy").appendChild(b.el);

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
  this.pares = [
    new ParDeBarreiras(altura, abertura, largura),
    new ParDeBarreiras(altura, abertura, largura + espaco),
    new ParDeBarreiras(altura, abertura, largura + espaco * 2),
    new ParDeBarreiras(altura, abertura, largura + espaco * 3),
  ];

  const deslocamento = 3;
  this.animar = () => {
    this.pares.forEach((par) => {
      par.setX(par.getX() - deslocamento);

      if (par.getX() < -par.getLargura()) {
        par.setX(par.getX() + espaco * this.pares.length);
        par.sortearAbertura();
      }

      const meio = largura / 2;
      const cruzaOMeio = par.getX() + deslocamento >= meio && par.getX() < meio;

      if (cruzaOMeio) notificarPonto();
    });
  };
}

const barreiras = new Barreiras(700, 1200, 200, 400);
const areaDoJogo = document.querySelector("[wm-flappy]");
barreiras.pares.forEach((par) => areaDoJogo.appendChild(par.el));
setInterval(() => {
  barreiras.animar();
}, 20);
