function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
function radixSort(arr) {
  const max = findMax(arr);

  // Perform counting sort for each digit
  for (let exp = 1; max / exp > 0; exp *= 10) {
    countingSort(arr, exp);
  }

  return arr;
}
function countingSort(arr, exp) {
  const n = arr.length;

  // Initialize count array and result array
  const count = new Array(10).fill(0);
  const output = new Array(n);

  // Store count of occurrences in count[]
  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  // Change count[i] so that count[i] contains the actual
  // position of this digit in output[]
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  // Copy the output array to arr[] in sorted order
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
