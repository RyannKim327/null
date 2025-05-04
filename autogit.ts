const originalArray = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray = originalArray.filter(item => item !== elementToRemove);
console.log(newArray); // Output: [1, 2, 4, 5]
const originalArray = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const index = originalArray.indexOf(elementToRemove);
if (index !== -1) {
    originalArray.splice(index, 1);
}

console.log(originalArray); // Output: [1, 2, 4, 5]
const originalArray = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray = originalArray.reduce((acc, curr) => {
    if (curr !== elementToRemove) {
        acc.push(curr);
    }
    return acc;
}, []);
console.log(newArray); // Output: [1, 2, 4, 5]
const originalArray = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray: number[] = [];
originalArray.forEach(item => {
    if (item !== elementToRemove) {
        newArray.push(item);
    }
});
console.log(newArray); // Output: [1, 2, 4, 5]
