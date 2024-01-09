function countingSort(array) {
  const len = array.length;
  if (len <= 1) return array;

  // Step 2: Find minimum and maximum values
  let min = array[0];
  let max = array[0];
  for (let i = 1; i < len; i++) {
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
  }

  // Step 3: Create count array
  const count = new Array(max - min + 1).fill(0);

  // Step 4: Increment count of each element
  for (let i = 0; i < len; i++) {
    count[array[i] - min]++;
  }

  // Step 5: Calculate cumulative count
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Step 6: Create output array
  const output = new Array(len);

  // Step 7: Place elements in the output array based on cumulative count
  for (let i = len - 1; i >= 0; i--) {
    output[count[array[i] - min] - 1] = array[i];
    count[array[i] - min]--;
  }

  // Step 8: Return the sorted output array
  return output;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
