array.splice(index, 1);
let fruits = ['apple', 'banana', 'orange', 'mango'];

// Remove 'banana' from the array
let index = fruits.indexOf('banana');
if (index > -1) {
    fruits.splice(index, 1);
}

console.log(fruits); // Output: ['apple', 'orange', 'mango']
