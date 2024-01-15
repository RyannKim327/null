function countingSort(array) {
  // Find the maximum value in the array
  const max = Math.max(...array);

  // Create a counting array of size max+1 with all elements initialized to 0
  const count = new Array(max + 1).fill(0);

  // Count the occurrences of each element in the array
  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
  }

  // Modify the count array such that each element at index i
  // stores the sum of previous counts
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Create a sorted array and place the elements in their correct positions
  const sortedArray = new Array(array.length);
  for (let i = array.length - 1; i >= 0; i--) {
    sortedArray[--count[array[i]]] = array[i];
  }

  return sortedArray;
}

// Test the counting sort algorithm
const array = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(array);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
