let arr = [1, 2, 3, 4, 5];
let index = arr.indexOf(3);
if (index !== -1) {
  arr.splice(index, 1);
}
console.log(arr); // [1, 2, 4, 5]
let arr = [1, 2, 3, 4, 5];
arr = arr.filter(x => x !== 3);
console.log(arr); // [1, 2, 4, 5]
let arr = [1, 2, 3, 4, 5];
let index = arr.findIndex(x => x === 3);
if (index !== -1) {
  arr.splice(index, 1);
}
console.log(arr); // [1, 2, 4, 5]
let arr = [1, 2, 3, 4, 5];
arr = [...arr.filter(x => x !== 3)];
console.log(arr); // [1, 2, 4, 5]
