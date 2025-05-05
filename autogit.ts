function countingSort(arr: number[]): number[] {
  if (arr.length === 0) return [];

  // Find min and max values to handle negative numbers too
  let min = arr[0];
  let max = arr[0];
  for (const num of arr) {
    if (num < min) min = num;
    else if (num > max) max = num;
  }

  const range = max - min + 1;
  const count = new Array(range).fill(0);

  // Count occurrences
  for (const num of arr) {
    count[num - min]++;
  }

  // Build the sorted array
  const sortedArr: number[] = [];
  for (let i = 0; i < range; i++) {
    while (count[i] > 0) {
      sortedArr.push(i + min);
      count[i]--;
    }
  }

  return sortedArr;
}

// Example usage:
const unsorted = [4, 2, -3, 6, 2, 6, 1];
console.log(countingSort(unsorted));  // Output: [-3, 1, 2, 2, 4, 6, 6]
