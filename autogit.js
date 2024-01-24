const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const filteredArray = array.filter((element) => element !== elementToRemove);

console.log(filteredArray); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const indexToRemove = 2; // Index of the element to remove

array.splice(indexToRemove, 1);

console.log(array); // Output: [1, 2, 4, 5]
