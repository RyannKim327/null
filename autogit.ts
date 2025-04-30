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
console.log(findSecondLargest([10, 5, 8, 12, 12, 3])); // Output: 10
console.log(findSecondLargest([5])); // Output: null
console.log(findSecondLargest([7, 7, 7])); // Output: null
function findSecondLargest(arr: number[]): number | null {
  const uniqueSorted = Array.from(new Set(arr)).sort((a, b) => b - a);
  return uniqueSorted.length >= 2 ? uniqueSorted[1] : null;
}
