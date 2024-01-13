function countingSort(array) {
  // Find the maximum value in the array
  const max = Math.max(...array);

  // Create a count array with a size equal to the maximum value + 1
  const count = new Array(max + 1).fill(0);

  // Count the occurrence of each element in the array
  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
  }

  // Modify the count array to store the cumulative count
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Create a sorted array
  const sortedArray = new Array(array.length);
  for (let i = array.length - 1; i >= 0; i--) {
    sortedArray[--count[array[i]]] = array[i];
  }

  return sortedArray;
}
const array = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(array);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
