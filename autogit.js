function countingSort(arr) {
  const max = Math.max(...arr);
  const countArray = Array(max + 1).fill(0);

  // Count occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i]]++;
  }

  // Modify countArray to store the cumulative sum
  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }

  const outputArray = Array(arr.length);

  // Place elements in the output array based on countArray
  for (let i = arr.length - 1; i >= 0; i--) {
    outputArray[--countArray[arr[i]]] = arr[i];
  }

  return outputArray;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(arr);
console.log(sortedArray);
