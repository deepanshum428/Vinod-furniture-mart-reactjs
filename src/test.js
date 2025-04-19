// spread operator examples in js

let a = [1, 2, 3];
let b = [4, 5, 6];

let a_b = [...a, ...b];

console.log(a);
console.log(b);
console.log(a_b);

function addValue(...arr) {
  console.log(arr);
}

addValue(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
