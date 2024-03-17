// Function to find the maximum number in an array
function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Function to perform counting sort based on the digit represented by exp
function countingSort(arr, exp) {
  const output = [];
  const count = new Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor(arr[i] / exp) % 10;
    count[index]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const index = Math.floor(arr[i] / exp) % 10;
    output[count[index] - 1] = arr[i];
    count[index]--;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}

// Main Radix Sort function
function radixSort(arr) {
  const max = getMax(arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }

  return arr;
}

// Usage
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr));
