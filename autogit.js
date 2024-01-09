function countingSort(arr) {
  // Find the maximum element in the array
  let max = Math.max(...arr);

  // Create a count array with a size equal to max+1 and initialize all elements with 0
  let count = Array(max + 1).fill(0);

  // Increment the count of each element in arr by 1
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Modify the count array such that each element at index i stores the sum of elements up to i
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Create a result array with the same length as the input array
  let result = new Array(arr.length);

  // Build the result array by placing each element from the input array to its correct position in the result array
  for (let i = 0; i < arr.length; i++) {
    result[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return result;
}

// Usage example:
let arr = [4, 2, 10, 8, 3];
let sortedArray = countingSort(arr);
console.log(sortedArray); // Output: [2, 3, 4, 8, 10]
