let array = [1, 2, 3, 4, 5];
let index = array.indexOf(3); // Find the index of the element you want to remove
if (index > -1) {
    array.splice(index, 1); // Remove one element at the index
}
console.log(array); // Output: [1, 2, 4, 5]
let array = [1, 2, 3, 4, 5];
let newArray = array.filter(item => item !== 3); // Remove the element with the value of 3
console.log(newArray); // Output: [1, 2, 4, 5]
let array = [1, 2, 3, 4, 5];
let index = array.indexOf(3); // Find the index of the element you want to remove
let newArray = array.slice(0, index).concat(array.slice(index + 1)); // Copy elements before and after the element to be removed
console.log(newArray); // Output: [1, 2, 4, 5]
