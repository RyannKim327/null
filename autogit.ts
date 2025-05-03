function shellSort(arr: number[]): number[] {
  let n = arr.length;

  // Start with a big gap, then reduce the gap
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Do a gapped insertion sort for this gap size.
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j = i;

      // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      // Put temp (the original arr[i]) in its correct location
      arr[j] = temp;
    }
  }
  
  return arr;
}

// Example use:
const unsorted = [23, 12, 1, 8, 34, 54, 2, 3];
console.log(shellSort(unsorted)); // Outputs sorted array
