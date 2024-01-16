function countingSort(arr) {
  // Determine the maximum value in the input array
  let maxValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  // Create a counting array with a size equal to the maximum value plus one
  const count = new Array(maxValue + 1).fill(0);

  // Count the occurrences of each value in the input array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Modify the counting array to store the cumulative count of each value
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Create a sorted array using the counting array
  const sorted = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    sorted[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return sorted;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
