let numbers = [1, 2, 3, 4, 5];

const indexToRemove = numbers.indexOf(3); // Find the index of the element you want to remove

if (indexToRemove > -1) {
    numbers.splice(indexToRemove, 1); // Remove 1 element at the index
}

console.log(numbers); // Output: [1, 2, 4, 5]
