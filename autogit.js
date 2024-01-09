function countingSort(arr) {
  // Find the maximum element in the array
  let max = Math.max(...arr);

  // Create a count array to store the count of each element
  let count = new Array(max + 1).fill(0);

  // Store the count of each element in the count array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Modify the count array so that each element stores the sum of previous counts
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Create a sorted array to store the sorted elements
  let sorted = new Array(arr.length);

  // Build the sorted array
  for (let i = 0; i < arr.length; i++) {
    sorted[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return sorted;
}

// Example usage:
let arr = [4, 2, 10, 8, 3];
let sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [2, 3, 4, 8, 10]
