//#region Linked List
function LinkedList() {
  this.length = 0;
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}
//METODOS :
//ADD.
LinkedList.prototype.add = function (n) {
  //instancio un nuevo nodo y pongo a current en el head
  let newNode = new Node(n);
  let current = this.head;

  //si el head es null le agrego el nodo creado
  if (this.head === null) {
    this.head = newNode;
    this.length++;
    return n;
  }

  //voy corriendo a current hasta el ultimo nodo
  while (current.next !== null) {
    current = current.next;
  }

  current.next = newNode;
  this.length++;
  return n;
};
//REMOVE.
LinkedList.prototype.remove = function () {
  //si la lista esta vacia
  if (this.head === null) return "null";
  let current = this.head;
  let num = current.value;

  //si tiene un solo nodo
  if (current.next === null) {
    this.head = null;
    this.length--;
    return num;
  }
  //moviendo el current hasta el ante ultimo eslavon de mi lista
  while (current.next.next !== null) {
    current = current.next;
  }
  //seteo num en el valor que voy a eliminar y seteo el next del current en null para eliminar el ultimo nodo
  num = current.next.value;
  current.next = null;
  return num;
};
//SEARCH.
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

const lista = new LinkedList();
lista.add(6);

console.log(lista);
console.log(lista.remove());
console.log(lista);
lista.add(2);
lista.add(61);
lista.add(3);
lista.add(15);
lista.remove();
console.log(lista);
console.log(lista.search(2));
//#endregion
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//#region HashTable
function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

//   - hash:
//Recibe un input alfabético,
//  suma el código numérico de cada caracter del input
//   calcula el módulo de ese número total por la cantidad de buckets;
//   de esta manera determina la posición de la tabla en la que se almacenará el dato.
HashTable.prototype.hash = function (str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }

  return sum % 35;
};

// -set
//  recibe el conjunto clave valor
// hashea la clave invocando al método hash
// almacena todo el conjunto en el bucket correcto.
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

// -get
// busca el valor que le corresponde en el bucket correcto de la //tabla.
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

// - hasKey:
// consulta si ya hay algo almacenado en la tabla con esa
//clave (retorna un booleano).
HashTable.prototype.hasKey = function (key) {
  let res = this.hash(key);
  //retorna false si el bucket esta vacio
  if (this.buckets[res] === undefined) return false;

  //retorna true si el bucket tiene una prop igual a la key
  if (this.buckets[res].hasOwnProperty([key])) return true;

  //retorna false si el bucket tiene algo pero su prop no es lo mismo que la key pasada
  if (!this.buckets[key]) return false;
};

const hashTable = new HashTable();
console.log(hashTable.set("foo", "loro"));
console.log(hashTable.set("ofo", "lala"));
console.log(hashTable.set("foo", "caca"));
console.log(hashTable.get("ofo"));
console.log(hashTable.hasKey("foo"));
//#endregion
