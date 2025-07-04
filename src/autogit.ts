const array = [1, 2, 3, 4, 5];
const valueToRemove = 3;

const newArray = array.filter(item => item !== valueToRemove);
console.log(newArray); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const indexToRemove = array.indexOf(3); // Find index of the element

if (indexToRemove !== -1) {
    array.splice(indexToRemove, 1); // Remove 1 element at the found index
}

console.log(array); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const valueToRemove = 3;

const newArray = array.reduce((acc, item) => {
    if (item !== valueToRemove) {
        acc.push(item);
    }
    return acc;
}, [] as number[]);

console.log(newArray); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const valueToRemove = 3;
const newArray: number[] = [];

array.forEach(item => {
    if (item !== valueToRemove) {
        newArray.push(item);
    }
});

console.log(newArray); // Output: [1, 2, 4, 5]
const array = ['apple', 'banana', 'cherry', 'date'];
const valueToRemove = 'cherry';

const indexToRemove = array.findIndex(item => item === valueToRemove);

if (indexToRemove !== -1) {
    array.splice(indexToRemove, 1); // Remove the element by index
}

console.log(array); // Output: ['apple', 'banana', 'date']
