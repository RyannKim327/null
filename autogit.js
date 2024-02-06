function countingSort(arr) {
  // Find the maximum value in the array
  const maxValue = Math.max(...arr);

  // Create a count array with zeros
  const count = Array(maxValue + 1).fill(0);

  // Count the occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Update the count array to store the position of each element
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Create a result array
  const result = Array(arr.length);

  // Place the elements in the result array using the count array
  for (let i = arr.length - 1; i >= 0; i--) {
    result[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  // Return the sorted result array
  return result;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
