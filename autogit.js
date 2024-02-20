let arr = [1, 2, 3, 4, 5];
let index = arr.indexOf(3); // Get the index of the element you want to remove
if (index !== -1) {
  arr.splice(index, 1); // Remove one element at the index
}
console.log(arr); // Output: [1, 2, 4, 5]
let arr = [1, 2, 3, 4, 5];
let filteredArr = arr.filter(item => item !== 3); // Create a new array excluding the element to remove
console.log(filteredArr); // Output: [1, 2, 4, 5]
let arr = [1, 2, 3, 4, 5];
let elementToRemove = 3;
let newArr = arr.filter(item => item !== elementToRemove);
console.log(newArr); // Output: [1, 2, 4, 5]
