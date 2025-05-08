const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const commonElements = arr1.filter(element => arr2.includes(element));

console.log(commonElements); // Output: [3, 4]
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const set2 = new Set(arr2);

const commonElements = arr1.filter(element => set2.has(element));

console.log(commonElements); // Output: [3, 4]
