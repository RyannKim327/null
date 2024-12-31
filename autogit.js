// Initialize an array
let fruits = ["apple", "banana", "orange", "grape"];

// Remove the element "orange" from the array
let index = fruits.indexOf("orange");
if (index !== -1) {
    fruits.splice(index, 1);
}

console.log(fruits); // Output: ["apple", "banana", "grape"]
