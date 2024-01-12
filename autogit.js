function countingSort(array) {
  const max = Math.max(...array);
  const countArray = Array(max + 1).fill(0);

  // Count occurrences
  for (let i = 0; i < array.length; i++) {
    countArray[array[i]]++;
  }

  // Modify countArray to contain the sum of previous counts
  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }

  const sortedArray = Array(array.length);

  // Build the sorted array by iterating the original array in reverse order
  for (let i = array.length - 1; i >= 0; i--) {
    const val = array[i];
    const sortedIndex = countArray[val] - 1;
    sortedArray[sortedIndex] = val;
    countArray[val]--;
  }

  return sortedArray;
}
const array = [2, 5, 2, 9, 1, 5, 8, 3, 3];
const sortedArray = countingSort(array);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 5, 5, 8, 9]
