const array = [1, 2, 3, 4, 5];
const indexToRemove = 2; // For example, to remove the element `3`

if (indexToRemove > -1) {
    array.splice(indexToRemove, 1);
}

console.log(array); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const valueToRemove = 3;

const newArray = array.filter(item => item !== valueToRemove);

console.log(newArray); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 2, 5];
const valueToRemove = 2;

const indexToRemove = array.findIndex(item => item === valueToRemove);

if (indexToRemove > -1) {
    array.splice(indexToRemove, 1);
}

console.log(array); // Output: [1, 3, 2, 5]
const array = [1, 2, 3, 4, 5];
const valueToRemove = 3;

const newArray = array.reduce((acc, item) => {
    if (item !== valueToRemove) {
        acc.push(item);
    }
    return acc;
}, [] as number[]);

console.log(newArray); // Output: [1, 2, 4, 5]
