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
const numbers = [10, 5, 8, 12, 11];
console.log(findSecondLargest(numbers)); // Outputs: 11
