let arr = [1, 2, 3, 2, 4];
let valueToRemove = 2;
arr = arr.filter(item => item !== valueToRemove);
console.log(arr); // [1, 3, 4]
let arr = [1, 2, 3, 2, 4];
let valueToRemove = 2;
const index = arr.indexOf(valueToRemove);
if (index !== -1) {
  arr.splice(index, 1);
}
console.log(arr); // [1, 3, 2, 4]
let arr = ['a', 'b', 'c', 'd'];
const indexToRemove = 2; // removes 'c'
arr.splice(indexToRemove, 1);
console.log(arr); // ['a', 'b', 'd']
