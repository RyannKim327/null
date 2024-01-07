// Find the maximum number in the input array
function getMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Perform counting sort based on a specific digit
function countingSort(arr, exp) {
  const n = arr.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

// Radix sort implementation
function radixSort(arr) {
  const max = getMax(arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }

  return arr;
}

// Example usage
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // [2, 24, 45, 66, 75, 90, 170, 802]
