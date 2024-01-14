function radixSort(arr) {
  const maxNum = Math.max(...arr);
  const maxDigits = Math.floor(Math.log10(maxNum) + 1);
}
function radixSort(arr) {
  const maxNum = Math.max(...arr);
  const maxDigits = Math.floor(Math.log10(maxNum) + 1);

  for (let i = 0; i < maxDigits; i++) {
    countingSort(arr, i);
  }
}
function countingSort(arr, digitPlace) {
  const count = Array(10).fill(0); // Create an array to store the count of each digit
  const output = Array(arr.length); // Create an output array to store the sorted elements

  // Count the occurrences of each digit
  for (let i = 0; i < arr.length; i++) {
    const digit = getDigit(arr[i], digitPlace);
    count[digit]++;
  }

  // Calculate the cumulative count of each digit
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = getDigit(arr[i], digitPlace);
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  // Copy the elements from the output array back to the original array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
const array = [170, 45, 75, 90, 802, 24, 2, 66];
radixSort(array);
console.log(array); // [2, 24, 45, 66, 75, 90, 170, 802]
