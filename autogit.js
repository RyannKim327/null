const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const commonElements = array1.filter(element => array2.includes(element));

console.log(commonElements);
