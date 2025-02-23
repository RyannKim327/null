const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray = array.filter(item => item !== elementToRemove);
console.log(newArray); // Output: [1, 2, 4, 5]
let array = [1, 2, 3, 4, 5];
const indexToRemove = array.indexOf(3); // Find the index of the element

if (indexToRemove > -1) {
    array.splice(indexToRemove, 1); // Remove one element at the found index
}

console.log(array); // Output: [1, 2, 4, 5]
let array = [1, 2, 3, 4, 5];

const indexToRemove = array.findIndex(item => item === 3); // Find index based on condition

if (indexToRemove !== -1) {
    array.splice(indexToRemove, 1); // Remove the element
}

console.log(array); // Output: [1, 2, 4, 5]
