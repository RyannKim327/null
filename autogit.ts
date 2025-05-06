const arr = [1, 2, 3, 2, 4];
const valueToRemove = 2;

const index = arr.indexOf(valueToRemove);
if (index !== -1) {
  arr.splice(index, 1);
}

console.log(arr); // [1, 3, 2, 4]
const arr = [1, 2, 3, 2, 4];
const valueToRemove = 2;

const filteredArr = arr.filter(item => item !== valueToRemove);

console.log(filteredArr); // [1, 3, 4]
const arr = [1, 2, 3, 4];
const indexToRemove = 1; // Will remove the element '2'

if (indexToRemove > -1 && indexToRemove < arr.length) {
  arr.splice(indexToRemove, 1);
}

console.log(arr); // [1, 3, 4]
