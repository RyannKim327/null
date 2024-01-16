const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const commonElements = array1.filter(element => array2.includes(element));
console.log(commonElements); // Output: [4, 5]
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const set1 = new Set(array1);
const commonElements = [...new Set(array2.filter(element => set1.has(element)))];
console.log(commonElements); // Output: [4, 5]
