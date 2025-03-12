const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray = array.filter(item => item !== elementToRemove);

console.log(newArray); // Output: [1, 2, 4, 5]
