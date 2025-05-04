const array = [1, 2, 3, 4, 2];
const elementToRemove = 2;

const index = array.indexOf(elementToRemove);
if (index !== -1) {
  array.splice(index, 1);
}

console.log(array); // Output: [1, 3, 4, 2]
const array = [1, 2, 3, 4, 2];
const elementToRemove = 2;

const filteredArray = array.filter(item => item !== elementToRemove);

console.log(filteredArray); // Output: [1, 3, 4]
