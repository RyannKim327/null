const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const index = array.indexOf(elementToRemove);
if (index !== -1) {
  array.splice(index, 1);
}

console.log(array); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 3, 4, 5];
const elementToRemove = 3;

const filteredArray = array.filter(item => item !== elementToRemove);
console.log(filteredArray); // Output: [1, 2, 4, 5]
array = array.filter(item => item !== elementToRemove);
