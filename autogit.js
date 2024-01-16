function shellSort(arr) {
  // Start with a large gap size
  let gap = Math.floor(arr.length / 2);

  // Reduce the gap in each iteration
  while (gap > 0) {
    // Iterate over each element in the array
    for (let i = gap; i < arr.length; i++) {
      // Store the current element
      let temp = arr[i];

      // Find the position to insert the current element
      let j;

      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }

      // Insert the current element
      arr[j] = temp;
    }

    // Reduce the gap for the next iteration
    gap = Math.floor(gap / 2);
  }
  
  return arr;
}

// Usage
const array = [9, 4, 7, 2, 6, 1, 3, 5, 8];
console.log(shellSort(array)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
