function countingSort(arr) {
  // Find the maximum element in the input array
  const max = Math.max(...arr);

  // Create a count array with size equal to max+1, filled with 0s
  const count = new Array(max + 1).fill(0);

  // Count the occurrences of each element in the input array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Compute the running sum in the count array
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Build the sorted output array using the count array
  const output = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return output;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
