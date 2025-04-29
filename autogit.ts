function countingSort(arr: number[]): number[] {
  if (arr.length === 0) return [];

  // Find the min and max values to determine range
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  
  // Initialize count array
  const count = new Array(max - min + 1).fill(0);

  // Count the occurrence of each value
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
