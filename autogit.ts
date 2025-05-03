function radixSort(arr: number[]): number[] {
  if (arr.length === 0) return arr;

  // Find the maximum number to know the number of digits
  const maxNum = Math.max(...arr);
  let exp = 1; // Exponent: 1, 10, 100, etc.

  while (Math.floor(maxNum / exp) > 0) {
    arr = countingSortByDigit(arr, exp);
    exp *= 10;
  }

  return arr;
}

function countingSortByDigit(arr: number[], exp: number): number[] {
  const output: number[] = new Array(arr.length);
  const count = new Array(10).fill(0);

  // Store count of occurrences in count[]
  for (let i = 0; i < arr.length; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  // Change count[i] so that count[i] contains actual position of this digit in output[]
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  // Iterate backwards for stability
  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  return output;
}
const nums = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(nums)); 
// Output: [2, 24, 45, 66, 75, 90, 170, 802]
