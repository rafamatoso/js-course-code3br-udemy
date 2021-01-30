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

const b = new ParDeBarreiras(700, 200, 400);
document.querySelector("[wm-flappy").appendChild(b.el);
