let arr = [1, 2, 3, 4, 5];
const indexToRemove = arr.indexOf(3); // Find the index of the element to remove

if (indexToRemove !== -1) {
    arr.splice(indexToRemove, 1); // Remove 1 element at index
}

console.log(arr); // Output: [1, 2, 4, 5]
let arr = [1, 2, 3, 4, 5];
const elementToRemove = 3;

arr = arr.filter(element => element !== elementToRemove);

console.log(arr); // Output: [1, 2, 4, 5]
let arr = [1, 2, 3, 4, 5];
const indexToRemove = arr.indexOf(3);

if (indexToRemove !== -1) {
    arr = [
        ...arr.slice(0, indexToRemove), // Elements before the element to remove
        ...arr.slice(indexToRemove + 1), // Elements after the element to remove
    ];
}

console.log(arr); // Output: [1, 2, 4, 5]
let arr = [1, 2, 3, 4, 5];
const elementToRemove = 3;

arr = arr.reduce((acc, current) => {
    if (current !== elementToRemove) {
        acc.push(current);
    }
    return acc;
}, []);

console.log(arr); // Output: [1, 2, 4, 5]
