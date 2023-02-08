const { BinarySearchTree } = require("../DS");
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
// 9️⃣ ***** EJERCICIO 9 ***** - BinarySearchTree.getHouseValues() 9️⃣
// Agregar al prototype de BinarySearchTree la función getHouseValues(), que servirá para obtener el valor total de una casa
// dependiendo del parámetro que recibas.
// Si recibes el parámetro "left", debes retornar la suma de todos los valores que estén a la izquierda del árbol.
// Si recibes el parámetro "right", debes retornar la suma de todos los valores que estén a la derecha.
// EJEMPLOS:
// Dado el siguiente árbol:
//                13
//             /      \
//           7         24
//         /          /   \
//        6         16     27
//      /                    \
//     3                     45
//      \
//       4
// BinarySearchTree.getHouseValues("left") Devuelve => 16
// BinarySearchTree.getHouseValues("right") Devuelve => 96
// REQUISITOS:
//  🟢 La función debe retornar un numero representando la suma total de las ramas, dependiendo del orden pedido
//  🟢 El valor del nodo raíz no debe ser incluido

BinarySearchTree.prototype.getHouseValues = function (side, total = 0) {
  // Tu código aquí:
  switch (side) {
    case "left":
      let aux = this.left;
      let contador = 0;
      console.log(aux.value);
      while (aux) {
        console.log(aux);
        contador += aux.value;
        aux = aux.left;
      }
      return contador;

    case "right":
      let aux1 = this.right;
      let contador1 = 0;
      while (aux1) {
        contador1 += aux1.value;
        aux1 = aux1.right;
      }
      return contador1;

    default:
      return false;
  }
};

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  BinarySearchTree,
};
