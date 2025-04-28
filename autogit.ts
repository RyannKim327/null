function findSecondLargest(arr: number[]): number | null {
  if (arr.length < 2) return null; // Not enough elements
  
  let max = -Infinity;
  let secondMax = -Infinity;

  for (const num of arr) {
    if (num > max) {
      secondMax = max;  // Update second largest before updating max
      max = num;
    } else if (num > secondMax && num !== max) {
      secondMax = num;
    }
  }

  return secondMax === -Infinity ? null : secondMax;
}
const array = [3, 1, 4, 2, 5];
console.log(findSecondLargest(array)); // Output: 4
function findSecondLargestSort(arr: number[]): number | null {
  const uniqueSorted = Array.from(new Set(arr)).sort((a, b) => b - a);
  return uniqueSorted.length >= 2 ? uniqueSorted[1] : null;
}
