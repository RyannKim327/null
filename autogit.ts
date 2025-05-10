function countingSort(arr: number[]): number[] {
  if (arr.length === 0) return [];

  // Find the maximum value in the array to know the range
  const maxVal = Math.max(...arr);

  // Initialize count array with zeros
  const count = new Array(maxVal + 1).fill(0);

  // Count occurrences of each number
  for (const num of arr) {
    count[num]++;
  }

  // Modify count array to store cumulative counts
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  const output = new Array(arr.length);
  // Iterate from the end for stability
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    output[count[num] - 1] = num;
    count[num]--;
  }

  return output;
}
