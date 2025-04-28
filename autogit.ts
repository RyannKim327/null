function countingSort(arr: number[]): number[] {
  if (arr.length === 0) return [];

  // Find max value to know the range
  const max = Math.max(...arr);

  // Initialize count array with zeros
  const count: number[] = new Array(max + 1).fill(0);

  // Count each element
  for (const num of arr) {
    count[num]++;
  }

  // Generate the sorted array
  const sortedArr: number[] = [];
  for (let num = 0; num <= max; num++) {
    while (count[num] > 0) {
      sortedArr.push(num);
      count[num]--;
    }
  }

  return sortedArr;
}
