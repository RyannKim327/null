let array = [1, 2, 3, 4, 5];
let index = array.indexOf(3); // Find the index of the element you want to remove
if (index > -1) {
    array.splice(index, 1); // Remove the element at the found index
}
console.log(array); // Output: [1, 2, 4, 5]
let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;
array = array.filter(item => item !== elementToRemove);
console.log(array); // Output: [1, 2, 4, 5]
let array = [1, 2, 3, 4, 5];
let index = array.indexOf(3); // Find the index of the element you want to remove
if (index > -1) {
    array = array.slice(0, index).concat(array.slice(index + 1)); // Create a new array without the element at the found index
}
console.log(array); // Output: [1, 2, 4, 5]
