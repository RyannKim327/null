let array = [1, 2, 3, 4, 5]; // Sample array
let elementToRemove = 3;

// Find the index of the element to remove
let index = array.indexOf(elementToRemove);

// Check if the element exists in the array
if (index > -1) {
    // Remove the element at the specified index
    array.splice(index, 1);
    console.log("Element removed:", elementToRemove);
    console.log("Updated array:", array);
} else {
    console.log("Element not found in the array.");
}
