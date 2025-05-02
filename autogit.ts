function countingSort(arr: number[]): number[] {
  if (arr.length === 0) return [];

  // Find the min and max values to handle negative numbers too
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  // Create a counts array for the range [min..max]
  const count = new Array(max - min + 1).fill(0);

  // Count occurrences
  for (const num of arr) {
    count[num - min]++;
  }

  // Reconstruct the sorted array
  const sortedArr: number[] = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      sortedArr.push(i + min);
      count[i]--;
    }
  }

  return sortedArr;
}
const data = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(data));  // [1, 2, 2, 3, 3, 4, 8]
