function radixSort(arr: number[]): number[] {
  if (arr.length === 0) return arr;

  // Find the maximum number to know the number of digits
  let maxNum = Math.max(...arr);
  let exp = 1; // Exponent representing the digit place (1, 10, 100, ...)
  
  const output = new Array(arr.length);

  while (Math.floor(maxNum / exp) > 0) {
    const count = new Array(10).fill(0);

    // Count occurrences of digits at the current place (exp)
    for (let i = 0; i < arr.length; i++) {
      const digit = Math.floor(arr[i] / exp) % 10;
      count[digit]++;
    }

    // Modify count to have positions in output array
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    // Build output array from right to left to maintain stability
    for (let i = arr.length - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[count[digit] - 1] = arr[i];
      count[digit]--;
    }

    // Copy sorted elements for the current digit back to arr
    for (let i = 0; i < arr.length; i++) {
      arr[i] = output[i];
    }

    exp *= 10;
  }

  return arr;
}
const unsorted = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(unsorted)); 
// Output: [2, 24, 45, 66, 75, 90, 170, 802]
