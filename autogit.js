function countingSort(arr, radix, divisor) {
  const n = arr.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    count[Math.floor(arr[i] / divisor) % radix]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / divisor) % radix] - 1] = arr[i];
    count[Math.floor(arr[i] / divisor) % radix]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}
function radixSort(arr) {
  const max = Math.max(...arr);

  for (let divisor = 1; Math.floor(max / divisor) > 0; divisor *= 10) {
    countingSort(arr, 10, divisor);
  }

  return arr;
}
const array = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(array);
console.log(sortedArray); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
