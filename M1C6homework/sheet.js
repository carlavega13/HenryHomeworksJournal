function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
BinarySearchTree.prototype.insert = function (value) {
  //el valor es mas chico que root del arbol
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
  if (this.value === null) return 0;
  // si el arbol tiene 1 solo elemento
  if (this.left === null && this.right === null) return 1;
  //si tiene mas de 1 elemento
  //si a los costados hay algo
  if (this.left === null) return 1 + this.right.size();
  if (this.right === null) return 1 + this.left.size();
  return 1 + this.left.size() + this.right.size();
};
BinarySearchTree.prototype.contains = function (n) {
  //si la cola esta vacia
  if (this.value === n) return true;
  if (n < this.value) {
    if (this.left) {
      //si hay algo
      console.log("caca");
      return this.left.contains(n);
    }
  } else {
    if (this.right) {
      console.log("caca");
      return this.right.contains(n);
    }
  }

  return false;
};
tree = new BinarySearchTree(20);
console.log(tree.value);
tree.insert(12);

tree.insert(2);

tree.insert(22);

console.log(tree);
console.log(tree.contains(2));
