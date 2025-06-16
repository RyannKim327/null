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
const arr = [3, 5, 7, 2, 8, 8];
console.log(findSecondLargest(arr)); // Output: 7
