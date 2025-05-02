function findSecondLargest(arr: number[]): number | undefined {
  if (arr.length < 2) return undefined;

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

  return secondLargest === -Infinity ? undefined : secondLargest;
}

// Example use:
const nums = [3, 1, 4, 1, 5, 9, 2];
console.log(findSecondLargest(nums)); // Outputs: 5
function findSecondLargestSort(arr: number[]): number | undefined {
  const uniqueSorted = Array.from(new Set(arr)).sort((a, b) => b - a);
  return uniqueSorted.length >= 2 ? uniqueSorted[1] : undefined;
}
