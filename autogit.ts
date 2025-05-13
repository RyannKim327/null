function findSecondLargest(arr: number[]): number | undefined {
  if (arr.length < 2) return undefined;  // Not enough elements

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? undefined : secondLargest;
}
const nums = [10, 5, 8, 12, 3];
console.log(findSecondLargest(nums));  // Output: 10
