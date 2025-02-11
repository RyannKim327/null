const array: number[] = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray: number[] = Array.from(new Set(array));

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array: number[] = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray: number[] = array.filter((item, index) => array.indexOf(item) === index);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
