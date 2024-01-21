function countingSort(array) {
  // Find the maximum element in the array
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  // Create a count array to store the count of each unique element
  let countArray = new Array(max + 1).fill(0);

  // Store the count of each element in the count array
  for (let i = 0; i < array.length; i++) {
    countArray[array[i]]++;
  }

  // Modify the count array such that each element at each index stores the sum of previous counts
  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }

  // Create a result array to store the sorted elements
  let resultArray = new Array(array.length);

  // Build the result array by placing each element in its correct position as per the count array
  for (let i = array.length - 1; i >= 0; i--) {
    resultArray[countArray[array[i]] - 1] = array[i];
    countArray[array[i]]--;
  }

  return resultArray;
}

// Test the counting sort algorithm
const inputArray = [4, 2, 10, 8, 3, 5];
const sortedArray = countingSort(inputArray);
console.log(sortedArray); // Output: [2, 3, 4, 5, 8, 10]
