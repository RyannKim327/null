const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const index = array.indexOf(elementToRemove);
if (index !== -1) {
  array.splice(index, 1);
}

console.log(array); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray = array.filter((element) => element !== elementToRemove);

console.log(newArray); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray = [...array.slice(0, array.indexOf(elementToRemove)), ...array.slice(array.indexOf(elementToRemove) + 1)];

console.log(newArray); // Output: [1, 2, 4, 5]
