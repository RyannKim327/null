// Initial array
let array = [1, 2, 3, 4, 5];

// Element to remove
let elementToRemove = 3;

// Find the index of the element in the array
let index = array.indexOf(elementToRemove);

// Check if the element exists in the array
if (index !== -1) {
    // Remove the element at the specified index
    array.splice(index, 1);
}

console.log(array); // Output: [1, 2, 4, 5]
