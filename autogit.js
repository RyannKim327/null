const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

// Find the index of the element to remove
const index = array.indexOf(elementToRemove);

// Check if the element is present in the array
if (index > -1) {
  // Use the splice method to remove the element
  array.splice(index, 1);
}

console.log(array); // [1, 2, 4, 5]
