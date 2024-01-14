// Function to find the maximum number in the array
function getMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Radix Sort function
function radixSort(arr) {
  // Find the maximum number to determine the number of digits
  const max = getMax(arr);

  // Counting sort for each digit
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }

  return arr;
}

// Counting Sort function for a particular digit
function countingSort(arr, exp) {
  const n = arr.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);

  // Store the count of occurrences in count[]
  for (let i = 0; i < n; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }

  // Change count[i] so that count[i] contains the actual position of this digit in the output[]
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = n - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }

  // Copy the output array to arr[] so that arr[] contains sorted numbers according to the current digit
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

// Usage example
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Original Array: ", arr);
console.log("Sorted Array: ", radixSort(arr));
