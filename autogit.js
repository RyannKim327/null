function shellSort(arr) {
  // Start with a big gap, then reduce the gap until it becomes 1
  let n = arr.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    // Perform an insertion sort for elements at each gap
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j = i;

      // Shift earlier gap-sorted elements up until the correct location is found
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      // Put the current element in its correct location
      arr[j] = temp;
    }

    // Reduce the gap for the next iteration
    gap = Math.floor(gap / 2);
  }
  
  return arr;
}

// Example usage:
const array = [10, 8, 3, 7, 5, 4, 1, 9, 2, 6];
console.log("Before sorting:", array);
console.log("After sorting:", shellSort(array));
