let arr = [1, 5, 2, 5];
const valueToRemove = 5;
arr = arr.filter(item => item !== valueToRemove);
console.log(arr); // [1, 2]
const index = arr.indexOf(valueToRemove);
if (index !== -1) {
  arr.splice(index, 1);
}
console.log(arr); // removes just the first 5
const indexToRemove = 2; // example
arr.splice(indexToRemove, 1);
console.log(arr);
