let array = [1, 2, 3, 4, 5];
let index = array.indexOf(3); // Find the index of the element you want to remove
if (index > -1) {
    array.splice(index, 1); // Remove 1 element starting from the index
}
console.log(array); // Result: [1, 2, 4, 5]
let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;
array = array.filter(item => item !== elementToRemove);
console.log(array); // Result: [1, 2, 4, 5]
