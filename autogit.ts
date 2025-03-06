const array = [1, 2, 3, 4, 5];
const valueToRemove = 3;

const newArray = array.filter(item => item !== valueToRemove);

console.log(newArray); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const indexToRemove = array.indexOf(3); // Find the index

if (indexToRemove !== -1) {
    array.splice(indexToRemove, 1); // Remove the element at that index
}

console.log(array); // Output: [1, 2, 4, 5]
const array = ['apple', 'banana', 'cherry', 'date'];
const fruitToRemove = 'cherry';

const indexToRemove = array.findIndex(fruit => fruit === fruitToRemove);

if (indexToRemove !== -1) {
    array.splice(indexToRemove, 1);
}

console.log(array); // Output: ['apple', 'banana', 'date']
const array = [1, 2, 3, 4, 5];
const valueToRemove = 3;

const newArray = array.reduce((acc, item) => {
    if (item !== valueToRemove) {
        acc.push(item);
    }
    return acc;
}, []);

console.log(newArray); // Output: [1, 2, 4, 5]
