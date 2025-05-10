function secondLargest(arr: number[]): number | undefined {
  if (arr.length < 2) return undefined; // Not enough elements

  // Sort array in descending order
  const sortedArr = [...arr].sort((a, b) => b - a);

  // Find the first distinct largest element after the max
  const max = sortedArr[0];
  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] < max) {
      return sortedArr[i];
    }
  }
  return undefined; // All elements are equal
}

// Example:
console.log(secondLargest([4, 8, 2, 8, 6])); // Output: 6
function secondLargest(arr: number[]): number | undefined {
  if (arr.length < 2) return undefined;

  let max = -Infinity;
  let secondMax = -Infinity;

  for (const num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }

  return secondMax === -Infinity ? undefined : secondMax;
}

// Example:
console.log(secondLargest([4, 8, 2, 8, 6])); // Output: 6
