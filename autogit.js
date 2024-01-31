function countingSort(arr) {
  // Step 2: Find the maximum value in the array
  let maxValue = Math.max(...arr);

  // Step 3: Create a count array with a length equal to the maximum value plus one, and initialize all values to 0
  let count = new Array(maxValue + 1).fill(0);

  // Step 4: Count the occurrences of each value in the input array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Step 5: Modify the count array to contain the actual positions of the values in the sorted output array
  for (let i = 1; i <= maxValue; i++) {
    count[i] += count[i - 1];
  }

  // Step 6: Create an output array with the same length as the input array
  let output = new Array(arr.length);

  // Step 7: Build the output array by placing the elements in their correct sorted positions
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  // Step 8: Return the sorted array
  return output;
}
let arr = [4, 3, 2, 1, 1, 3, 2, 4];
console.log(countingSort(arr));
[1, 1, 2, 2, 3, 3, 4, 4]
