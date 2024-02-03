function countingSort(arr) {
  // Find the maximum value in the array
  const max = Math.max(...arr);

  // Create a count array with a length equal to the maximum value plus one
  const countArray = new Array(max + 1).fill(0);

  // Count the occurrences of each element in the input array
  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i]]++;
  }

  // Build the sorted array
  let sortedIndex = 0;
  for (let i = 0; i < countArray.length; i++) {
    while (countArray[i] > 0) {
      arr[sortedIndex++] = i;
      countArray[i]--;
    }
  }

  return arr;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
