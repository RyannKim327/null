const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const commonElements = array1.filter(element => array2.includes(element));

console.log(commonElements); // Output: [3, 4, 5]
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const set1 = new Set(array1);
const commonElements = array2.filter(element => set1.has(element));

console.log(commonElements); // Output: [3, 4, 5]
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const commonElements = array1.filter(element => array2.indexOf(element) !== -1);

console.log(commonElements); // Output: [3, 4, 5]
