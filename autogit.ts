function findSecondLargest(arr: number[]): number | undefined {
  if (arr.length < 2) return undefined; // Not enough elements

  // Sort the array in descending order
  const sorted = [...arr].sort((a, b) => b - a);

  // The second largest element will be at index 1,
  // but we must ensure duplicates don't interfere
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] < sorted[0]) {
      return sorted[i];
    }
  }
  
  return undefined; // All elements are the same
}

// Example:
console.log(findSecondLargest([5, 3, 9, 1, 9])); // Outputs 5
function findSecondLargest(arr: number[]): number | undefined {
  if (arr.length < 2) return undefined;

  let first = -Infinity;
  let second = -Infinity;

  for (const num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }

  return second === -Infinity ? undefined : second;
}

// Example:
console.log(findSecondLargest([5, 3, 9, 1, 9])); // Outputs 5
