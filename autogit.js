function radixSort(arr) {
  // Find the maximum number to determine the number of digits
  const max = Math.max(...arr);
  
  // Perform counting sort for every digit
  for (let exp = 1; max / exp > 0; exp *= 10) {
    countingSort(arr, exp);
  }
  
  return arr;
}

function countingSort(arr, exp) {
  const output = new Array(arr.length);
  const count = new Array(10).fill(0);

  // Count the occurrences of each digit at the specified position
  for (let i = 0; i < arr.length; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }

  // Calculate the running sum of counts (to determine positions)
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Place the elements in the output array in the correct positions
  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  // Copy the sorted elements back to the input array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}

// Example usage:
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
