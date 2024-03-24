let numbers = [1, 2, 3, 4, 5];

// Remove element at index 2 (which is 3)
numbers.splice(2, 1);

console.log(numbers); // Output: [1, 2, 4, 5]
let numbers = [1, 2, 3, 4, 5];
let elementToRemove = 3;

let index = numbers.indexOf(elementToRemove);
if (index !== -1) {
    numbers.splice(index, 1);
}

console.log(numbers); // Output: [1, 2, 4, 5]
