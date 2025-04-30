const arr = [1, 2, 3, 4, 3];
const valueToRemove = 3;

// Find the index of the value
const index = arr.indexOf(valueToRemove);

if (index !== -1) {
  arr.splice(index, 1);
}

console.log(arr); // Output: [1, 2, 4, 3]
const arr = [1, 2, 3, 4, 3];
const valueToRemove = 3;

const filteredArr = arr.filter(element => element !== valueToRemove);

console.log(filteredArr); // Output: [1, 2, 4]
const arr = [1, 2, 3, 4];
const indexToRemove = 2;

if (indexToRemove >= 0 && indexToRemove < arr.length) {
  arr.splice(indexToRemove, 1);
}

console.log(arr); // Output: [1, 2, 4]
