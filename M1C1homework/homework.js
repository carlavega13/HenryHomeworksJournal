"use strict";

function BinarioADecimal(num) {
  let aux = num.split("").reverse().join("");
  let calculo = 0;

  for (let i = 0; i < aux.length; i++) {
    calculo += aux[i] * Math.pow(2, i);
  }
  return calculo;
}

function DecimalABinario(num) {
  let aux = [];
  let ent = num;
  while (ent >= 1) {
    aux.push(ent % 2);
    ent = ent / 2;
    ent = Math.floor(ent);
  }
  return aux.reverse().join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
