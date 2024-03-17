function shellSort(arr) {
  // Start with a large gap, then reduce the gap
  for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Perform insertion sort for elements at each gap
    for (let i = gap; i < arr.length; i++) {
      let temp = arr[i];
      let j;

      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }

      arr[j] = temp;
    }
  }

  return arr;
}

// Example usage
const arr = [12, 34, 54, 2, 3];
console.log(shellSort(arr)); // Output: [2, 3, 12, 34, 54]
