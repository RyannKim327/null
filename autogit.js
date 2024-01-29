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
  let digit = 1;

  while (Math.floor(max / digit) > 0) {
    countingSort(arr, digit);
    digit *= 10;
  }

  return arr;
}
function countingSort(arr, digit) {
  const n = arr.length;
  const count = Array(10).fill(0);
  const output = Array(n);

  // Count occurrences of each digit
  for (let i = 0; i < n; i++) {
    const index = Math.floor(arr[i] / digit) % 10;
    count[index]++;
  }

  // Adjust count array to hold the actual position of each digit in the output array
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(arr[i] / digit) % 10;
    output[count[index] - 1] = arr[i];
    count[index]--;
  }

  // Copy the output array back to the input arra
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
