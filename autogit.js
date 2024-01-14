const array = [1, 2, 3, 4, 5];
const elementToRemove = 3; // The element you want to remove

// Find the index of the element to remove
const index = array.indexOf(elementToRemove);

// If the element is found, remove it from the array
if (index > -1) {
  array.splice(index, 1);
}

console.log(array); // Output: [1, 2, 4, 5]
