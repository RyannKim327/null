function countingSort(arr) {
  // Find the maximum element in the array
  let max = Math.max(...arr);

  // Create a count array with length equal to max+1
  let count = new Array(max + 1).fill(0);

  // Count the occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Modify the count array to store the actual position of each element
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Create a sorted array using the count array
  let sorted = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    sorted[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return sorted;
}

// Example usage:
let arr = [4, 5, 1, 3, 4, 5];
let sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 3, 4, 4, 5, 5]
