const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const common = array1.filter(element => array2.includes(element));
console.log(common); // Output: [3, 4]
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const set2 = new Set(array2);
const common = array1.filter(element => set2.has(element));
console.log(common); // Output: [3, 4]
