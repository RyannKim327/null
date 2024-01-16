let arr = [1, 2, 3, 4, 5];
let elementToRemove = 3;

// Find the index of the element
let index = arr.indexOf(elementToRemove);

// If the element exists in the array, remove it
if (index > -1) {
  arr.splice(index, 1);
}

console.log(arr); // Output: [1, 2, 4, 5]
