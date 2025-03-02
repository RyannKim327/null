const arr = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray = arr.filter(item => item !== elementToRemove);
console.log(newArray); // Output: [1, 2, 4, 5]
const arr = [1, 2, 3, 4, 5];
const elementToRemove = 3;
const index = arr.indexOf(elementToRemove);

if (index !== -1) {
    arr.splice(index, 1); // Removes 1 element at the found index
}

console.log(arr); // Output: [1, 2, 4, 5]
const arr = [1, 2, 3, 4, 5];
const elementToRemove = 3;
const index = arr.findIndex(item => item === elementToRemove);

if (index !== -1) {
    arr.splice(index, 1);
}

console.log(arr); // Output: [1, 2, 4, 5]
const arr = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray = arr.reduce((acc, item) => {
    if (item !== elementToRemove) {
        acc.push(item);
    }
    return acc;
}, [] as number[]);

console.log(newArray); // Output: [1, 2, 4, 5]
