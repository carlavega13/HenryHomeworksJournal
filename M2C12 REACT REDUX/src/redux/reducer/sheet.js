const arr = [
  { id: 12313, name: "Mandarinas", price: 230 },
  { id: 65445, name: "Tomates", price: 130 },
];
const id = 65445;

const res = arr.filter((e) => {
  console.log(e.id);
  return e.id !== id;
});
console.log(res);
