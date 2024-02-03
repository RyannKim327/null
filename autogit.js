function countingSort(array) {
  // Find the maximum element in the input array
  const max = Math.max(...array);

  // Create a counting array with the length of 'max+1'
  const countingArray = Array(max + 1).fill(0);

  // Update the counting array with the count of each element
  for (let i = 0; i < array.length; i++) {
    countingArray[array[i]]++;
  }

  // Modify the counting array to store the cumulative count
  for (let i = 1; i < countingArray.length; i++) {
    countingArray[i] += countingArray[i - 1];
  }

  // Create a sorted array with the same length as the input array
  const sortedArray = Array(array.length);

  // Iterate over the input array from right to left
  for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i];
    const index = countingArray[element] - 1;
    sortedArray[index] = element;
    countingArray[element]--;
  }

  return sortedArray;
}

// Example usage:
const array = [4, 3, 2, 1, 4, 3, 2, 1];
const sortedArray = countingSort(array);
console.log(sortedArray); // Output: [1, 1, 2, 2, 3, 3, 4, 4]
