function radixSort(arr) {
  // Find the maximum number in the array
  const maxNum = Math.max(...arr);

  // Perform counting sort for every digit
  for (let exp = 1; Math.floor(maxNum / exp) > 0; exp *= 10) {
    countSort(arr, exp);
  }

  return arr;
}
function countSort(arr, exp) {
  const output = [];
  const count = new Array(10).fill(0);

  // Store the count of occurrences in count[]
  for (let i = 0; i < arr.length; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  // Change count[i] so that count[i] contains
  // the actual position of this digit in output[]
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  // Copy the output array to arr[] so that arr[] contains sorted numbers according to the current digit
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr));
