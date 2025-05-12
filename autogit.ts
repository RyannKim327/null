function countingSort(arr: number[]): number[] {
  if (arr.length === 0) return [];

  // Find the maximum and minimum values to handle negative numbers as well
  let max = arr[0];
  let min = arr[0];
  for (const num of arr) {
    if (num > max) max = num;
    if (num < min) min = num;
  }

  // Initialize count array size based on the range of input values
  const range = max - min + 1;
  const count = new Array(range).fill(0);

  // Count each element's frequency
  for (const num of arr) {
    count[num - min]++;
  }

  // Accumulate the counts (prefix sums) - optional if you want a stable sort
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Output array to place sorted elements
  const output = new Array(arr.length);

  // Build the output array from the input (traverse from the end for stability)
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    count[num - min]--;
    output[count[num - min]] = num;
  }

  return output;
}
