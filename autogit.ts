function countingSort(arr: number[]): number[] {
  if (arr.length === 0) return [];

  // Find the max value to know the range of counts
  const maxVal = Math.max(...arr);

  // Initialize the count array with zeros
  const count = new Array(maxVal + 1).fill(0);

  // Count how many times each number appears
  for (const num of arr) {
    count[num]++;
  }

  // Reconstruct the sorted array
  const sortedArr: number[] = [];
  for (let num = 0; num <= maxVal; num++) {
    for (let i = 0; i < count[num]; i++) {
      sortedArr.push(num);
    }
  }

  return sortedArr;
}
const unsorted = [4, 2, 2, 8, 3, 3, 1];
const sorted = countingSort(unsorted);
console.log(sorted);  // Output: [1, 2, 2, 3, 3, 4, 8]
