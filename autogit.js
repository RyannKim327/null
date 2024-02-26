let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;

// Find the index of the element to remove
let index = array.indexOf(elementToRemove);

if (index > -1) {
  // Remove the element at the specified index
  array.splice(index, 1);
}

console.log(array); // Output: [1, 2, 4, 5]
