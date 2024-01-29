function countingSort(arr) {
  if (arr.length === 0) {
    return arr;
  }

  // Find the minimum and maximum values in the array
  let min = arr[0];
  let max = arr[0];
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }

  // Create a counting array with a slot for each possible value
  const count = new Array(max - min + 1).fill(0);

  // Count the number of occurrences of each value
  for (let i = 0; i < n; i++) {
    count[arr[i] - min]++;
  }

  // Calculate the cumulative count
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Build the sorted array
  const output = new Array(n);

  for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  // Return the sorted array
  return output;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(arr)); // Output: [1, 2, 2, 3, 3, 4, 8]
