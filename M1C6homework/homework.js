"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.rigth = null;
}
BinarySearchTree.prototype.insert = function (value) {
  //el valor es mas chico que root del arbol
  let aux = 0;
  if (value < this.value) {
    //es MENOR
    if (this.left) {
      //si hay algo
      this.left.insert(value);
    } else {
      //si no hay algo
      this.left = new BinarySearchTree(value);
      return value;
    }
  } else {
    //es MAYOR
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
BinarySearchTree.prototype.contains = function (n) {
  if (this.value === n) return true;
  if (n < this.value) {
    if (this.left) {
      //si hay algo
      return this.left.contains(n);
    }
  } else {
    if (this.right) {
      return this.right.contains(n);
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, str) {
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
BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr) {
  if (!arr) {
    var arr = [];
  }
  cb(this.value);
  if (this.left) {
    arr.push(this.left);
  }
  if (this.right) {
    arr.push(this.right);
  }
  if (arr.length > 0) {
    arr.shift().breadthFirstForEach(cb, arr);
  }
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
