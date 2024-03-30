let fruits = ['apple', 'banana', 'cherry', 'orange'];

// Find the index of the element you want to remove
let index = fruits.indexOf('banana');

// Remove the element at that index
if (index > -1) {
    fruits.splice(index, 1);
}

console.log(fruits); // Output: ['apple', 'cherry', 'orange']
