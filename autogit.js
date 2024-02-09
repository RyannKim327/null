const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const index = array.indexOf(elementToRemove);
if (index > -1) {
  array.splice(index, 1);
}

console.log(array); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const filteredArray = array.filter((element) => element !== elementToRemove);

console.log(filteredArray); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const index = array.indexOf(elementToRemove);
if (index > -1) {
  array = array.slice(0, index).concat(array.slice(index + 1));
}

console.log(array); // Output: [1, 2, 4, 5]
