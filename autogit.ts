const numbers = [10, 5, 20, 3, 7];

// Sort ascending
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [3, 5, 7, 10, 20]
function sortIntegers(arr: number[], descending = false): number[] {
  return arr.sort((a, b) => descending ? b - a : a - b);
}

const sortedAsc = sortIntegers([4, 1, 7, 3]);
const sortedDesc = sortIntegers([4, 1, 7, 3], true);

console.log(sortedAsc); // [1, 3, 4, 7]
console.log(sortedDesc); // [7, 4, 3, 1]
