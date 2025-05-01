function findSecondLargest(arr: number[]): number | null {
  if (arr.length < 2) return null; // Not enough elements

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

// Example usage:
console.log(findSecondLargest([10, 5, 8, 12, 3]));  // Output: 10
function findSecondLargest(arr: number[]): number | null {
  const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
  return uniqueSorted.length > 1 ? uniqueSorted[1] : null;
}

console.log(findSecondLargest([10, 5, 8, 12, 3]));  // Output: 10
