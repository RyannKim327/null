const numbers: number[] = [5, 3, 8, 1, 2];

// Sort in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 3, 5, 8]
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [8, 5, 3, 2, 1]
function sortNumbers(arr: number[], ascending = true): number[] {
  return arr.sort((a, b) => ascending ? a - b : b - a);
}
