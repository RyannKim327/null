// Original array
const array = [1, 2, 3, 4, 5];

// Element to be removed
const elementToRemove = 3;

// Find the index of the element in the array
const index = array.indexOf(elementToRemove);

// Remove the element using the splice() method
if (index !== -1) {
  array.splice(index, 1);
}

// Resulting array after removal
console.log(array); // Output: [1, 2, 4, 5]
