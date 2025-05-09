function findSecondLargest(arr: number[]): number | null {
  if (arr.length < 2) return null; // No second largest if less than 2 elements

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
const nums = [10, 5, 8, 12, 7];
console.log(findSecondLargest(nums));  // Output: 10
function secondLargestSort(arr: number[]): number | null {
  const uniqueSorted = Array.from(new Set(arr)).sort((a, b) => b - a);
  return uniqueSorted.length >= 2 ? uniqueSorted[1] : null;
}
