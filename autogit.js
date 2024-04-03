let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];

let commonElements = array1.filter(element => array2.includes(element));

console.log(commonElements); // Output: [4, 5]
