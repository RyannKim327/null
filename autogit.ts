const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const common = array1.filter(item => array2.includes(item));
console.log(common); // Output: [3, 4, 5]
const array1 = [1, 2, 3, 4, 5, 3];
const array2 = [3, 4, 5, 6, 7];

const set2 = new Set(array2);
const commonUnique = [...new Set(array1)].filter(item => set2.has(item));
console.log(commonUnique); // Output: [3, 4, 5]
