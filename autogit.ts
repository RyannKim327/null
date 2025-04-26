const array = [1, 2, 3, 4, 5];
const indexToRemove = 2; // This is the index of the element you want to remove (3 in this case)

if (indexToRemove > -1) {
    array.splice(indexToRemove, 1); // Removes 1 element at index 2
}

console.log(array); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 3, 5];
const elementToRemove = 3;

const newArray = array.filter(item => item !== elementToRemove);

console.log(newArray); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 3, 5];
const elementToRemove = 3;

const indexToRemove = array.indexOf(elementToRemove);
if (indexToRemove !== -1) {
    array.splice(indexToRemove, 1); // Removes the first occurrence
}

console.log(array); // Output: [1, 2, 4, 3, 5]
const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray = array.reduce((accumulator, current) => {
    if (current !== elementToRemove) {
        accumulator.push(current);
    }
    return accumulator;
}, []);

console.log(newArray); // Output: [1, 2, 4, 5]
