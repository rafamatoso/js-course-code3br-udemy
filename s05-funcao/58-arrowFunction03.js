// No contexto do node, o objeto global será igual ao this
let comparaComThis = function(param) {
  console.log(this === param);
};

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports); // module.exports = this

comparaComThisArrow = comparaComThisArrow.bind(obj); // o bind não consigará forçar a mudança de contexto do this
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);
