function shellSort(arr) {
  // Calculate the gap, starting from the highest power of 2 less than the array length
  let gap = Math.floor(arr.length / 2);

  while (gap > 0) {
    // Perform insertion sort on subarrays defined by the gap
    for (let i = gap; i < arr.length; i++) {
      let j = i;
      const temp = arr[i];

      // Shift elements to the right until the correct position is found
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }

    // Reduce the gap by half in each iteration
    gap = Math.floor(gap / 2);
  }

  return arr;
}

// Test the algorithm
const array = [7, 2, 4, 1, 5, 3];
console.log("Before sorting:", array);
console.log("After sorting:", shellSort(array));
Before sorting: [7, 2, 4, 1, 5, 3]
After sorting: [1, 2, 3, 4, 5, 7]
