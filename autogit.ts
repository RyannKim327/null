function radixSort(arr: number[]): number[] {
  if (arr.length === 0) return arr;

  // Find the maximum number to know the number of digits
  const maxNum = Math.max(...arr);

  // Start with the least significant digit (exponent = 1)
  let exp = 1;

  // Temporary array for sorting by digit
  const output = new Array(arr.length);

  // Continue until we've processed all digits
  while (Math.floor(maxNum / exp) > 0) {
    const count = new Array(10).fill(0); // For digits 0-9

    // Count occurrences of each digit at exp place
    for (let i = 0; i < arr.length; i++) {
      const digit = Math.floor((arr[i] / exp) % 10);
      count[digit]++;
    }

    // Transform count into a prefix sum array to determine positions
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    // Build the output array: iterate from right to left for stability
    for (let i = arr.length - 1; i >= 0; i--) {
      const digit = Math.floor((arr[i] / exp) % 10);
      output[count[digit] - 1] = arr[i];
      count[digit]--;
    }

    // Copy sorted elements back into original array for next digit pass
    for (let i = 0; i < arr.length; i++) {
      arr[i] = output[i];
    }

    exp *= 10;
  }

  return arr;
}
const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
const sorted = radixSort(numbers);
console.log(sorted); // [2, 24, 45, 66, 75, 90, 170, 802]
