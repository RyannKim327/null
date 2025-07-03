function countingSort(arr: number[]): number[] {
  if (arr.length === 0) {
    return [];
  }

  // Find the minimum and maximum values to know the range of the input
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  // Initialize count array with size based on the range of input values
  const count = new Array(max - min + 1).fill(0);

  // Count each number's occurrence
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

// Example usage:
const unsortedArray = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
