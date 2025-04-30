const arr = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const index = arr.indexOf(elementToRemove);
if (index !== -1) {
  arr.splice(index, 1);
}

console.log(arr); // Output: [1, 2, 4, 5]
const arr = [1, 3, 2, 3, 4];
const elementToRemove = 3;

const filteredArray = arr.filter(el => el !== elementToRemove);

console.log(filteredArray); // Output: [1, 2, 4]
