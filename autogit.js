let numbers = [4, 2, 9, 1, 7];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 4, 7, 9]
let numbers = [4, 2, 9, 1, 7];
let sortedNumbers = [];
while (numbers.length > 0) {
  let min = Math.min(...numbers);
  sortedNumbers.push(min);
  numbers.splice(numbers.indexOf(min), 1);
}
console.log(sortedNumbers); // Output: [1, 2, 4, 7, 9]
let numbers = [4, 2, 9, 1, 7];
function sortNumbers(a, b) {
  return a - b;
}
let sortedNumbers = numbers.sort(sortNumbers);
console.log(sortedNumbers); // Output: [1, 2, 4, 7, 9]
