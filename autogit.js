function countingSort(arr) {
  // Find the maximum element in the array
  let max = Math.max(...arr);

  // Create a count array of size max+1 and initialize all elements to 0
  let count = Array(max + 1).fill(0);

  // Store the count of each element in the count array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Modify the count array such that each element at index i stores the sum of previous counts
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Create an output array
  let output = Array(arr.length);

  // Build the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  // Copy the sorted elements back to the original array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }

  return arr;
}

// Example usage:
let array = [4, 2, 0, 2, 1, 4, 3, 6, 7, 2, 1];
console.log("Original Array:", array);
console.log("Sorted Array:", countingSort(array));
