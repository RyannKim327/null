// Helper function to find the maximum number in an array
function getMax(arr) {
  let max = 0;
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

// Main Radix Sort function
function radixSort(arr) {
  const max = getMax(arr); // Find maximum number to determine the number of digits

  // Perform counting sort for every digit
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }

  return arr;
}

// Helper function to perform counting sort based on a specific digit
function countingSort(arr, exp) {
  const count = new Array(10).fill(0); // Initialize count array
  const n = arr.length;
  const output = new Array(n);

  // Store count of occurrences in count[]
  for (let i = 0; i < n; i++) {
    const index = Math.floor(arr[i] / exp) % 10;
    count[index]++;
  }

  // Change count[i] so that count[i] contains the actual position of this digit in output[]
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(arr[i] / exp) % 10;
    output[count[index] - 1] = arr[i];
    count[index]--;
  }

  // Copy the output array to arr[] so that arr[] contains sorted numbers according to the current digit
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

// Test the radix sort algorithm
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
