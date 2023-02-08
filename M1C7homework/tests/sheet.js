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
let arr = [5, 1, 8, 4, 2];

console.log(arr);
console.log(selectionSort(arr));
