// Define an array
let fruits = ["apple", "banana", "orange", "mango"];

// Identify the index of the element you want to remove
let indexToRemove = fruits.indexOf("orange");

if (indexToRemove > -1) {
    // Remove the element at the specified index
    fruits.splice(indexToRemove, 1);
    console.log("Element removed successfully");
} else {
    console.log("Element not found in the array");
}

// Print the updated array
console.log(fruits);
