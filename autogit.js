const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const commonElements = array1.filter(element => array2.includes(element));
console.log(commonElements); // Output: [4, 5]
const commonElements = array1.filter(element => array2.includes(element));
const commonElementsInOrder = array1.filter((element, index) => array2.includes(element) && array1.indexOf(element) === index);
console.log(commonElementsInOrder); // Output: [4, 5]
