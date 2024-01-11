function countingSort(arr) {
  // Find the maximum value in the array
  const max = Math.max(...arr);

  // Create a count array filled with 0s
  const count = new Array(max + 1).fill(0);

  // Count the occurrence of each value in arr
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Calculate the cumulative count
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Create a sorted array
  const sortedArr = new Array(arr.length);

  // Place elements from arr into sortedArr using the count array
  for (let i = arr.length - 1; i >= 0; i--) {
    sortedArr[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return sortedArr;
}

// Example usage:
const arr = [4, 2, 10, 6, 8, 7];
const sortedArr = countingSort(arr);
console.log(sortedArr); // [2, 4, 6, 7, 8, 10]
