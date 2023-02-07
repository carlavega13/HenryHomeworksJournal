"use strict";

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.length = 0;
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}
LinkedList.prototype.add = function (n) {
  let newNode = new Node(n);
  let current = this.head;
  if (this.head === null) {
    this.head = newNode;
    this.length++;
    return n;
  }
  while (current.next !== null) {
    current = current.next;
  }

  current.next = newNode;
  this.length++;
  return n;
};
LinkedList.prototype.remove = function () {
  if (this.head === null) return null;
  let current = this.head;
  let num = current.value;
  if (current.next === null) {
    this.head = null;
    this.length--;
    return num;
  }
  while (current.next.next !== null) {
    current = current.next;
  }
  num = current.next.value;
  current.next = null;
  return num;
};
LinkedList.prototype.search = function (c) {
  let current = this.head;
  //si no tiene head
  if (current === null) return null;
  //Movimiento del current hasta el ultimo nodo
  while (current !== null) {
    //verificacion de dato a dato
    if (current.value === c) return current.value;
    //verificacion de ejecucion de callback pasandole cada valor de los nodos hasta que de true
    if (typeof c === "function" && c(current.value) === true) {
      return current.value;
    }

    current = current.next;
  }
  return null;
};
/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}
HashTable.prototype.hash = function (input) {
  var num = 0;
  for (const i of input) num += i.charCodeAt();
  num = num % this.numBuckets;
  return num;
};
HashTable.prototype.set = function (key, val) {
  //verfica si no es una string y tira error
  if (typeof key !== "string") throw new TypeError("Keys must be strings");

  let res = this.hash(key);

  //si el bucket esta vacio almacena nuestra clave valor en el bucket.
  if (this.buckets[res] === undefined) {
    this.buckets[res] = { [key]: val };
    return;
  }
  // si el bucket ya tiene un objeto con la misma clave sobrescribe su valor.
  if (this.buckets[res].hasOwnProperty([key])) {
    this.buckets[res][key] = val;
  } else {
    //si esta en el mismo bucket pero distinta clave
    this.buckets[res] = {
      ...this.buckets[res],
      [key]: val,
    };
  }
};
HashTable.prototype.get = function (key) {
  let res = this.hash(key);

  // si el bucket no esta vacio busca que key coincide en ese bucket y retorna el valor
  if (this.buckets[res] !== undefined) {
    if (this.buckets[res].hasOwnProperty(key)) {
      return this.buckets[res][key];
    }
  }
  return null;
};

HashTable.prototype.hasKey = function (key) {
  let res = this.hash(key);
  //retorna false si el bucket esta vacio
  if (this.buckets[res] === undefined) return false;

  //retorna true si el bucket tiene una prop igual a la key
  if (this.buckets[res].hasOwnProperty([key])) return true;

  //retorna false si el bucket tiene algo pero su prop no es lo mismo que la key pasada
  if (!this.buckets[key]) return false;
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
