function shellSort(arr) {
  // Start with a large gap and reduce it over time
  const len = arr.length;
  let gap = Math.floor(len / 2);

  while (gap > 0) {
    // Perform insertion sort for this gap size
    for (let i = gap; i < len; i++) {
      const temp = arr[i];
      let j = i;

      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }

    // Reduce the gap size
    gap = Math.floor(gap / 2);
  }

  return arr;
}

// Example usage
const arr = [9, 4, 1, 7, 3, 6];
console.log(shellSort(arr)); // Output: [1, 3, 4, 6, 7, 9]
