"use strict";

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  //creo mis variables para factorear y almacenar

  let fact = 2;
  let arr = [1];
  while (num > 1) {
    if (num % fact === 0) {
      num = num / fact;
      arr.push(fact);
    } else {
      fact++;
    }
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //defino desordenado como booleano para controlar cuantas veces entro al while
  let desordenado = true;
  while (desordenado) {
    //seteo desordenado en false para cortar la ejecucion del while
    desordenado = false;
    for (let i = 0; i < array.length - 1; i++) {
      //si el numero es mayor al numero siguiente en el array
      if (array[i] > array[i + 1]) {
        //es mayor cambio de lugar los elementos
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        //si entro al if seteo denuevo desordenado en true
        desordenado = true;
      }
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  //recorro el array una vez por cada elemento
  for (let i = 0; i < array.length; i++) {
    //declaro mis auxiliares para valores y para indice
    let aux = array[i];
    let j = i - 1;
    //while para correr a j e ir para atras
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  }
  return array;
}
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código
  for (let i = 0; i < array.length - 1; i++) {
    let ind = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[ind]) ind = j;
    }
    if (i !== ind) {
      let aux = array[i];
      array[i] = array[ind];
      array[ind] = aux;
    }
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
