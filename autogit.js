// Define an array
let array = [1, 2, 3, 4, 5];

// Find the index of the element you want to remove
let index = array.indexOf(3);

// Remove the element at that index
if (index > -1) {
    array.splice(index, 1);
}

console.log(array); // Output: [1, 2, 4, 5]
