const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray = array.filter(item => item !== elementToRemove);

console.log(newArray); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const indexToRemove = array.indexOf(3);

if (indexToRemove !== -1) {
    array.splice(indexToRemove, 1);
}

console.log(array); // Output: [1, 2, 4, 5]
