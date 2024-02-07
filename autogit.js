function countingSort(arr) {
  if (arr.length === 0) {
    return arr;
  }

  // Step 2: Find the minimum and maximum values
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Step 3: Create the count array
  let count = new Array(max - min + 1).fill(0);

  // Step 4: Count the occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  // Step 6: Update the count array to be cumulative
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Step 7: Place the elements in the sorted order
  let sortedArray = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    sortedArray[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  // Step 8: Return the sorted array
  return sortedArray;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
