let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;

// Find the index of the element to remove
let index = array.indexOf(elementToRemove);

// If the element exists in the array, remove it
if (index > -1) {
  array.splice(index, 1);
}

console.log(array); // Output: [1, 2, 4, 5]
