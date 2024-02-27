const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const commonElements = array1.filter(element => array2.includes(element));

console.log(commonElements); // Output: [3, 4, 5]
