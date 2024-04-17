// Create an array
let fruits = ["apple", "banana", "orange", "grape"];

// Find the index of the element you want to remove
let index = fruits.indexOf("orange");

// Remove the element at the specified index
if (index > -1) {
    fruits.splice(index, 1);
}

// Now fruits array will be ["apple", "banana", "grape"]
console.log(fruits);
