const arr = [1, 2, 3, 4, 3];
const valueToRemove = 3;

const index = arr.indexOf(valueToRemove);
if (index !== -1) {
  arr.splice(index, 1);
}

console.log(arr); // [1, 2, 4, 3]
const arr = [1, 2, 3, 4, 3];
const valueToRemove = 3;

const filteredArr = arr.filter(item => item !== valueToRemove);
console.log(filteredArr); // [1, 2, 4]
const arr = ['a', 'b', 'c', 'd'];
const indexToRemove = 2;

if (indexToRemove > -1 && indexToRemove < arr.length) {
  arr.splice(indexToRemove, 1);
}

console.log(arr); // ['a', 'b', 'd']
