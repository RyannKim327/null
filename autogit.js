function countingSort(arr) {
  // Step 2: Find the maximum element in the array
  let max = Math.max(...arr);

  // Step 3: Create the count array with a length of (max + 1) and initialize all elements to 0
  let count = new Array(max + 1).fill(0);

  // Step 4: Count the occurrences of each element in the input array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Step 5: Modify the count array such that each element at index i stores the sum of previous counts
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Step 6: Create the output array with the same length as the input array
  let output = new Array(arr.length);

  // Step 7: Place the elements in their sorted order into the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  // Step 8: Return the sorted array
  return output;
}
let arr = [4, 2, 9, 5, 2, 8, 7, 1, 3, 6];
console.log(countingSort(arr)); // [1, 2, 2, 3, 4, 5, 6, 7, 8, 9]
