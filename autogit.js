let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;

// Find the index of the element to be removed
let index = array.indexOf(elementToRemove);

// Check if the element exists in the array
if (index !== -1) {
    // Remove the element at the specified index
    array.splice(index, 1);
    console.log("Element removed:", elementToRemove);
    console.log("Array after removal:", array);
} else {
    console.log("Element not found in the array.");
}
