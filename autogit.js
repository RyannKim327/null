function countingSort(arr) {
  // Step 2: Find the maximum element in the array
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Step 3: Create a count array and initialize it with 0s
  const count = new Array(max + 1).fill(0);

  // Step 4: Count the occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Step 5: Modify the count array to store the actual position of elements
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Step 6: Create a result array with the same length as the input array
  const result = new Array(arr.length);

  // Step 7: Place the elements in the input array into their correct positions in the result array
  for (let i = arr.length - 1; i >= 0; i--) {
    result[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  // Step 8: Return the sorted array
  return result;
}
const input = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(input);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
