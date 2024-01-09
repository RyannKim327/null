// Sample array
let arr = [1, 2, 3, 4, 5];

// Element to remove
let elementToRemove = 3;

// Finding index of the element
let index = arr.indexOf(elementToRemove);

// Checking if the element exists in the array
if (index !== -1) {
  // Removing the element using splice()
  arr.splice(index, 1);
}

console.log(arr); // Output: [1, 2, 4, 5]
