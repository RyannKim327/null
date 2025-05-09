const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);  // Output: [5, 4, 3, 2, 1]
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = [...numbers].reverse();
console.log(reversedNumbers);  // [5, 4, 3, 2, 1]
console.log(numbers);          // Original remains unchanged: [1, 2, 3, 4, 5]
const reversedNumbers = numbers.slice().reverse();
