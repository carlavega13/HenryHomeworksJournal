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
