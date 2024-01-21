function countingSort(arr) {
  // Find the maximum element in the array
  let max = Math.max(...arr);

  // Create a count array with size equal to the maximum element
  let count = new Array(max + 1).fill(0);

  // Count the occurrences of each element in the array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Calculate the cumulative count array
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Create a temporary array to store the sorted elements
  let result = new Array(arr.length);

  // Build the sorted array
  for (let i = arr.length - 1; i >= 0; i--) {
    result[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return result;
}

// Example usage
let arr = [4, 2, 9, 6, 5, 3];
let sortedArr = countingSort(arr);
console.log(sortedArr);  // Output: [2, 3, 4, 5, 6, 9]
