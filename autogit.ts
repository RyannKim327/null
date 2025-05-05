function countingSort(arr: number[]): number[] {
  if (arr.length === 0) return [];

  // Find the maximum value in the array to know the range
  const max = Math.max(...arr);

  // Initialize the count array with zeros
  const count = new Array(max + 1).fill(0);

  // Count the occurrences of each value
  for (const num of arr) {
    count[num]++;
  }

  // Reconstruct the sorted array
  const sortedArr: number[] = [];
  for (let num = 0; num <= max; num++) {
    while (count[num] > 0) {
      sortedArr.push(num);
      count[num]--;
    }
  }

  return sortedArr;
}
