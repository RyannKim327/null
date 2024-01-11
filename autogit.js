function countingSort(arr) {
  // Find the maximum element in the array
  let max = Math.max(...arr);

  // Create a count array with length equal to max + 1 and initialize with 0
  let count = new Array(max + 1).fill(0);

  // Count the occurrences of each element in arr and store the count in the count array
  for (let num of arr) {
    count[num]++;
  }

  // Modify the count array such that each element at index i stores the sum of previous counts
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Create a result array with the same length as arr
  let result = new Array(arr.length);

  // Build the result array by placing each element from arr at its correct position using the count array
  for (let num of arr) {
    result[count[num] - 1] = num;
    count[num]--;
  }

  return result;
}

// Example usage
let arr = [4, 2, 10, 2, 8, 3];
let sortedArr = countingSort(arr);

console.log(sortedArr); // Output: [2, 2, 3, 4, 8, 10]
