function countingSort(array) {
  const len = array.length;

  // Find the maximum element in the array to determine the range of counting
  let max = 0;
  for (let i = 0; i < len; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  // Create an array of size max+1 and initialize all elements to 0
  const countingArray = new Array(max + 1).fill(0);

  // Count the occurrences of each element
  for (let i = 0; i < len; i++) {
    countingArray[array[i]]++;
  }

  // Calculate the cumulative counts
  for (let i = 1; i <= max; i++) {
    countingArray[i] += countingArray[i - 1];
  }

  // Create a sorted array using the counting array
  const sortedArray = new Array(len);
  for (let i = len - 1; i >= 0; i--) {
    sortedArray[--countingArray[array[i]]] = array[i];
  }

  return sortedArray;
}

// Example usage:
const array = [4, 2, 10, 5, 1, 8];
const sortedArray = countingSort(array);
console.log(sortedArray); // Output: [1, 2, 4, 5, 8, 10]
