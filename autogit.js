function shellSort(arr) {
  let n = arr.length;

  // Start with a large gap and reduce it over time
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Perform insertion sort for elements at current gap
    for (let i = gap; i < n; i++) {
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

// Usage example:
const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log("Before sorting:", arr);
console.log("After sorting:", shellSort(arr));
