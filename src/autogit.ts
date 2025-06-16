const array = [1, 2, 3, 4, 3];
const valueToRemove = 3;

const index = array.indexOf(valueToRemove);
if (index > -1) {
  array.splice(index, 1); // Removes element at specified index
}

console.log(array); // Output: [1, 2, 4, 3]
const array = [1, 2, 3, 4, 3];
const valueToRemove = 3;

const filteredArray = array.filter(item => item !== valueToRemove);

console.log(filteredArray); // Output: [1, 2, 4]
const array = [1, 2, 3, 4];
const indexToRemove = 2; // remove the element at index 2 (which is 3)

if (indexToRemove > -1 && indexToRemove < array.length) {
  array.splice(indexToRemove, 1);
}

console.log(array); // Output: [1, 2, 4]
