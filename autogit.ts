const arr = [1, 2, 3, 2, 4];
const valueToRemove = 2;

const index = arr.indexOf(valueToRemove);
if (index > -1) {
  arr.splice(index, 1);
}

console.log(arr); // Output: [1, 3, 2, 4]
const arr = [1, 2, 3, 2, 4];
const valueToRemove = 2;

const filtered = arr.filter(item => item !== valueToRemove);

console.log(filtered); // Output: [1, 3, 4]
const arr = [1, 2, 3, 4];
const indexToRemove = 2; // Removes the element at index 2 (which is 3)

if (indexToRemove > -1 && indexToRemove < arr.length) {
  arr.splice(indexToRemove, 1);
}

console.log(arr); // Output: [1, 2, 4]
