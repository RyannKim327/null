let arr = [1, 2, 3, 4, 5];
let index = arr.indexOf(3); // Find the index of the element you want to remove
if (index !== -1) {
  arr.splice(index, 1); // Remove one element starting from the index
}
console.log(arr); // Output: [1, 2, 4, 5]
let arr = [1, 2, 3, 4, 5];
arr = arr.filter(item => item !== 3); // Create a new array without the element
console.log(arr); // Output: [1, 2, 4, 5]
let arr = [1, 2, 3, 4, 5];
let index = arr.indexOf(3); // Find the index of the element you want to remove
if (index !== -1) {
  arr = [...arr.slice(0, index), ...arr.slice(index + 1)]; // Create a new array without the element
}
console.log(arr); // Output: [1, 2, 4, 5]
