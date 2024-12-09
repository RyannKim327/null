let fruits = ['apple', 'banana', 'orange', 'kiwi'];

// Remove 'orange' from the array
let index = fruits.indexOf('orange');
if (index > -1) {
  fruits.splice(index, 1);
}

console.log(fruits); // Output: ['apple', 'banana', 'kiwi']
