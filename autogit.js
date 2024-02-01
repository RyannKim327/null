function countingSort(array) {
  // Find the maximum element in the array
  let max = Math.max(...array);

  // Create a count array with size max+1 and initialize all the elements with 0
  let countArray = new Array(max + 1).fill(0);

  // Store the count of each element in the count array
  for (let i = 0; i < array.length; i++) {
    countArray[array[i]]++;
  }

  // Modify the countArray to store the actual position of each element in the sorted output
  for (let i = 1; i <= max; i++) {
    countArray[i] += countArray[i - 1];
  }

  // Create a sorted array and fill it by traversing the original array from the end
  let sortedArray = new Array(array.length);
  for (let i = array.length - 1; i >= 0; i--) {
    sortedArray[countArray[array[i]] - 1] = array[i];
    countArray[array[i]]--;
  }

  return sortedArray;
}

// Example usage:
let array = [4, 2, 2, 8, 3, 3, 1];
let sortedArray = countingSort(array);
console.log(sortedArray);
