function countingSort(arr) {
  const max = Math.max(...arr);
  const count = Array(max + 1).fill(0);
  const result = Array(arr.length);

  // Increment the count array for each element in the input array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Accumulate the count array by summing each element with the previous one
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Build the result array by finding the index from the count array
  for (let i = arr.length - 1; i >= 0; i--) {
    result[--count[arr[i]]] = arr[i];
  }

  return result;
}

// Test the countingSort function
const array = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(array);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
