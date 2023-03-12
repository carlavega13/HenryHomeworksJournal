//DIFERENTES ESTRUCTURAS DE DATOS
//#region QUEUE

function Queue() {
  this.arr = [];
}
Queue.prototype.enqueue = function (n) {
  this.arr.unshift(n);
};
Queue.prototype.dequeue = function () {
  return this.arr.pop();
};
Queue.prototype.size = function () {
  return this.arr.length;
};

let cola = new Queue();
// console.log(cola.size());
cola.enqueue(2);
cola.enqueue(3);
console.log(cola.dequeue());

console.log(cola);
console.log(cola.size());

//#endregion
//#region Stack

function Stack() {
  this.arr = [];
}
Stack.prototype.add = function (n) {
  return this.arr.push(n);
};
Stack.prototype.delete = function (n) {
  return this.arr.pop(n);
};
Stack.prototype.size = function (n) {
  return this.arr.length;
};
let fila = new Stack();
fila.add(5);
fila.add(3);
fila.add(6);
console.log(fila);
fila.delete();
console.log(fila.size());
//#endregion
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
//#region Binary Search Tree
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.rigth = null;
}

// - insert: agrega un nodo en el lugar correspondiente
BinarySearchTree.prototype.insert = function (value) {
  //el valor es mas chico que root del arbol
  if (value < this.value) {
    //es MENOR IZQIUERDA LEFT
    if (this.left) {
      //si hay algo
      this.left.insert(value);
    } else {
      //si no hay algo
      this.left = new BinarySearchTree(value);
      return value;
    }
  } else {
    //es MAYOR DERECHA RIGHT
    if (this.right) {
      //si hay algo
      this.right.insert(value);
    } else {
      //si no hay algo
      this.right = new BinarySearchTree(value);
      return value;
    }
  }
};
// - size: retorna la cantidad total de nodos del árbol
BinarySearchTree.prototype.size = function () {
  //si el arbol esta vacio
  if (!this.value) return 0;
  // si el arbol tiene 1 solo elemento
  if (!this.left && !this.right) return 1;
  //si tiene mas de 1 elemento
  //si a los costados hay algo
  if (!this.left) return 1 + this.right.size();
  if (!this.right) return 1 + this.left.size();
  return 1 + this.left.size() + this.right.size();
};
// - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
BinarySearchTree.prototype.contains = function (n) {
  //si el valor es igual a parametro(n)
  if (this.value === n) return true;
  //si el valor es mayor al parametro(n)
  if (this.value > n) {
    if (this.left) {
      //si hay algo
      return this.left.contains(n);
    }
  } else {
    if (this.right) {
      //si hay algo
      return this.right.contains(n);
    }
  }
  return false;
};
// - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS)
BinarySearchTree.prototype.depthFirstForEach = function (cb, str) {
  //dependiendo del caso de ("post-order", "pre-order", o default -->"in-order")
  switch (str) {
    case "post-order":
      if (this.left) this.left.depthFirstForEach(cb, str);
      if (this.right) this.right.depthFirstForEach(cb, str);
      cb(this.value);
      break;

    case "pre-order":
      cb(this.value);
      if (this.left) this.left.depthFirstForEach(cb, str);
      if (this.right) this.right.depthFirstForEach(cb, str);

      break;

    default:
      if (this.left) this.left.depthFirstForEach(cb, str);
      cb(this.value);
      if (this.right) this.right.depthFirstForEach(cb, str);
      break;
  }
};
// - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr) {
  //le paso un arr por parametro
  ///si no existe array lo crea sino lo ignora
  if (!arr) {
    var arr = [];
  }
  //ejecuta la cb con el valor
  cb(this.value);
  //si hay algo a la izquierda lo pushea al arr
  if (this.left) {
    arr.push(this.left);
  }
  //si hay algo a la derecha lo pushea al arr
  if (this.right) {
    arr.push(this.right);
  }
  //el arr tiene elementos le saco el primero y ejecuto las recursion
  if (arr.length > 0) {
    arr.shift().breadthFirstForEach(cb, arr);
  }
};

tree = new BinarySearchTree(20);
console.log(tree.value);
tree.insert(12);

tree.insert(2);

tree.insert(22);

console.log(tree);
console.log(tree.contains(22));
//#endregion
//#region css
@keyframes bounce{
    0%{
        transform: translateY(0);
    }
    20%{
        transform: translateY(-5px);
    }
    50%{
        transform: translateY(0);
    }
    80%{
        transform: translateY(5px);
    }
    100%{
        transform: translateY(0);
    }
}


/** DIV NAVBAR **/
.divNavBar{
display: flex;
width: 100%;
background-color:#252525;
height: 200px;
justify-content: end;
justify-content: space-between;

margin-bottom: 70px;
border-bottom-left-radius: 1em;
border-bottom-right-radius: 1em;
border-bottom: 0.125em solid #85cd85;
box-shadow: 0 0.5em 2em 0.1em #008000 ;
transition: box-shadow 300ms linear;

}
.divNavBar:hover{
    box-shadow:  0 0em 1em 0.3em #008000 ;
    
    

}
.buscadorCaja{
display: flex;
align-items: center;
}
/*?              INPUT               ?*/

.inputSearch{
border-radius: 0.25em;
padding: 0.125em 1em;
border: #0bff01 0.125em solid;
font-size: 1.5rem;
letter-spacing: 0.20em;
background-color: #252525;
box-shadow: 
inset 0 0 0.3em 0 #0bff01,
0 0 0.5em 0 #0bff01 ;

transition: box-shadow 300ms linear;

} 

.inputSearch:hover{
   box-shadow:  
    inset 0 0 0.3em 0 #0bff01,
0 0 1em 0 #0bff01 ;

}
/*?                 BOTON                **/
.butonSearch{
     /* display: flex; */
font-size: 1.5rem;
margin: 1.5rem;
background-color: #252525;
border: #0bff01 0.125em solid;
padding: 0.125em 1em;
letter-spacing:0.20em;
font-weight: 300;
cursor: pointer;
color: #0bff01;
border-radius: 0.25em;
text-shadow:
 0 0 0.5em currentColor,
 0 0 0.05em whitesmoke;
 box-shadow: 
 inset 0 0 0.3em 0 #0bff01,
 0 0 0.5em 0 #0bff01 ;
position: relative;
 transition: background-color 300ms linear;
}

.butonSearch:hover::after{
    opacity: 0.3;


 
}
.butonSearch:hover{
    background-color: #0bff01;
    color: #252525;

   
}
.butonSearch::after{
    pointer-events: none;
    content: " ";
    position: absolute;
    background:#0bff01 ;
    top: 120%;
    left:0;
    width: 100%;
    height: 100%;
    transform: perspective(1em)rotateX(40deg)  scale(1, 0.50);
    opacity: 0;
    filter: blur(1em);

transition: opacity 300ms linear;
}

/*?         FOTO             ?*/
.foto{
height: 18em;
cursor: pointer;
margin-left: 1.5em;
  filter: drop-shadow(0px 0px  15px #018a01);

}
.foto:hover{
    animation: bounce 1s 0s infinite linear ;
  

    
}


//#endregion
