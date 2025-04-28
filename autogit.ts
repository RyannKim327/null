function findSecondLargest(arr: number[]): number | null {
  if (arr.length < 2) {
    // Not enough elements for a second largest
    return null;
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (const num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num !== max) {
      secondMax = num;
    }
  }

  // If secondMax is still -Infinity, it means there's no second distinct largest
  return secondMax === -Infinity ? null : secondMax;
}

// Example usage:
const numbers = [3, 1, 4, 2, 5, 5];
console.log(findSecondLargest(numbers)); // Output: 4
