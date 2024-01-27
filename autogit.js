let arr = [1, 2, 3, 4, 5];
let elementToRemove = 3;

// Find the index of the element to remove
let index = arr.indexOf(elementToRemove);

// Remove the element from the array
if (index !== -1) {
  arr.splice(index, 1);
}

console.log(arr); // Output: [1, 2, 4, 5]
