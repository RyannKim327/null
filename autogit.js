// Define an array
let fruits = ["apple", "banana", "orange", "kiwi"];

// Find the index of the element you want to remove
let index = fruits.indexOf("orange");

// Remove the element at the specified index
if (index > -1) {
    fruits.splice(index, 1);
}

// Now the array will be ["apple", "banana", "kiwi"]
console.log(fruits);
