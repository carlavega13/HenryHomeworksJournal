function BinarySearchTree(valor) {
  this.value = valor;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left === null) {
      var newTree = new BinarySearchTree(value);
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      var newTree = new BinarySearchTree(value);
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.size = function () {
  if (this.value === null) {
    return 0;
  }

  if (this.left === null && this.right === null) {
    return 1;
  }

  if (this.left === null) {
    return 1 + this.right.size();
  }

  if (this.right === null) {
    return 1 + this.left.size();
  }

  return 1 + this.left.size() + this.right.size();
};

// / EJEMPLOS:
//
// Dado el siguiente árbol:
//                6
//             /      \
//           4         8
//         /  \       /  \
//        3    5     7    9
//
// nuevaCasa.spotHousePrices(6, []) => [8, 7, 9]
// nuevaCasa.spotHousePrices(4, []) => [6, 5, 8, 7, 9]
//
//⚠️ ATENCION ⚠️
// - Para solucionar el ejercicio, deben recorrer el arbol de manera depth-first/pre-order
//   (o sea, lo recorren de izquierda a derecha)
// - El array sera provisto via parametros
//
// REQUISITOS:
//  🟢 Devolver un array con los numeros mayores al recibido por parametros
//  🟢 Recorrer el arbol de manera depth-first pre-order
BinarySearchTree.prototype.spotHousePrices = function (num, arr = []) {
  if (this.value > num) {
    arr.push(this.value);
  }
  if (this.left) this.left.spotHousePrices(num, arr);
  if (this.right) this.right.spotHousePrices(num, arr);
  return arr;
};

const housePrices = new BinarySearchTree(6);
housePrices.insert(4);
housePrices.insert(8);
housePrices.insert(3);
housePrices.insert(5);
housePrices.insert(7);
housePrices.insert(9);
console.log(housePrices.spotHousePrices(6, []));
