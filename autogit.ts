const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const commonElements = array1.filter(element => array2.includes(element));
console.log(commonElements); // Output: [4, 5]
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const set = new Set(array2);
const commonElements = array1.filter(element => set.has(element));
console.log(commonElements); // Output: [4, 5]
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const commonElements = array1.reduce((acc, element) => {
    if (array2.includes(element)) {
        acc.push(element);
    }
    return acc;
}, [] as number[]);

console.log(commonElements); // Output: [4, 5]
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const commonElements: number[] = [];

array1.forEach(element => {
    if (array2.includes(element)) {
        commonElements.push(element);
    }
});

console.log(commonElements); // Output: [4, 5]
