let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.slice().reverse();
console.log(numbers);         // Output: [1, 2, 3, 4, 5]
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]
