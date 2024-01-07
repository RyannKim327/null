function countingSort(array) {
  const max = Math.max(...array);
  const counts = new Array(max + 1).fill(0);

  // Counting the occurrences of each element
  for (let i = 0; i < array.length; i++) {
    counts[array[i]]++;
  }

  // Determining the positions of each element
  for (let i = 1; i < counts.length; i++) {
    counts[i] += counts[i - 1];
  }

  const sortedArray = new Array(array.length);

  // Placing elements in the sorted array
  for (let i = array.length - 1; i >= 0; i--) {
    const current = array[i];
    sortedArray[counts[current] - 1] = current;
    counts[current]--;
  }

  return sortedArray;
}

// Example usage:
const array = [5, 2, 9, 5, 2, 3, 5];
const sortedArray = countingSort(array);
console.log(sortedArray); // Output: [2, 2, 3, 5, 5, 5, 9]
