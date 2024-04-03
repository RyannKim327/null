let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;

// Find the index of the element to remove
let index = array.indexOf(elementToRemove);

// Check if the element exists in the array
if (index > -1) {
    // Use the splice() method to remove the element
    array.splice(index, 1);
}

console.log(array); // Output: [1, 2, 4, 5]
