function secondLargest(arr: number[]): number | undefined {
  if (arr.length < 2) return undefined; // Not enough elements

  // Sort array in descending order
  const sorted = [...arr].sort((a, b) => b - a);

  // Find the first element less than the largest (to handle duplicates)
  const largest = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] < largest) {
      return sorted[i];
    }
  }

  return undefined; // All elements are equal, no second largest
}
const numbers = [3, 5, 1, 2, 5, 5];
console.log(secondLargest(numbers)); // Output: 3
function secondLargest(arr: number[]): number | undefined {
  if (arr.length < 2) return undefined;

  let largest = -Infinity;
  let second = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num < largest) {
      second = num;
    }
  }

  return second === -Infinity ? undefined : second;
}
