const arr = [1, 2, 3, 4, 3];
const valueToRemove = 3;

const index = arr.indexOf(valueToRemove);
if (index !== -1) {
  arr.splice(index, 1);
}

console.log(arr); // [1, 2, 4, 3]
const arr = [1, 2, 3, 4, 3];
const valueToRemove = 3;

const filtered = arr.filter(item => item !== valueToRemove);
console.log(filtered); // [1, 2, 4]
const arr = [1, 2, 3, 4];
const indexToRemove = 2;

if (indexToRemove > -1 && indexToRemove < arr.length) {
  arr.splice(indexToRemove, 1);
}

console.log(arr); // [1, 2, 4]
