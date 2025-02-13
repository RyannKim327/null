// Example array
const fruits = ['apple', 'banana', 'orange', 'grape'];

// Element to remove
const elementToRemove = 'banana';

// Create a new array without the specified element
const updatedFruits = fruits.filter(fruit => fruit !== elementToRemove);

console.log(updatedFruits); // Output: ['apple', 'orange', 'grape']
// Example array
const fruits = ['apple', 'banana', 'orange', 'grape'];

// Element to remove
const elementToRemove = 'banana';

// Find the index of the element
const index = fruits.indexOf(elementToRemove);

// If the element exists, remove it
if (index > -1) {
    fruits.splice(index, 1);
}

console.log(fruits); // Output: ['apple', 'orange', 'grape']
