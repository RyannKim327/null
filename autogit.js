let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;

// Find the index of the element to remove
let index = array.indexOf(elementToRemove);

// Check if the element exists in the array
if (index !== -1) {
    // Remove the element using splice
    array.splice(index, 1);
}

console.log(array); // Array without the removed element
