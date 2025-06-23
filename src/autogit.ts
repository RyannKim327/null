const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

// Create a new array excluding the specified element
const updatedArray = array.filter(item => item !== elementToRemove);

console.log(updatedArray); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

// Find the index of the element to remove
const index = array.indexOf(elementToRemove);

if (index !== -1) {
  // Remove the element at the found index
  array.splice(index, 1);
}

console.log(array); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

// Find the index of the element to remove
const index = array.indexOf(elementToRemove);

if (index !== -1) {
  delete array[index];
}

console.log(array); // Output: [1, 2, undefined, 4, 5]
const array = [1, 2, 3, 3, 4, 5];
const elementToRemove = 3;

// Remove all occurrences of the element
const updatedArray = array.filter(item => item !== elementToRemove);

console.log(updatedArray); // Output: [1, 2, 4, 5]
function removeElement<T>(array: T[], elementToRemove: T): T[] {
  return array.filter(item => item !== elementToRemove);
}

const array = [1, 2, 3, 4, 5];
const updatedArray = removeElement(array, 3);

console.log(updatedArray); // Output: [1, 2, 4, 5]
