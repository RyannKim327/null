function shellSort(arr) {
  const len = arr.length;
  let h = 1;

  // Calculate initial interval
  while (h < len / 3) {
    h = 3 * h + 1;
  }

  // Reduce interval until it becomes 1
  while (h >= 1) {
    // Perform insertion sort with current interval
    for (let i = h; i < len; i++) {
      const currentVal = arr[i];
      let j = i;

      // Compare elements that are h positions apart and swap if necessary
      while (j >= h && arr[j - h] > currentVal) {
        arr[j] = arr[j - h];
        j -= h;
      }

      arr[j] = currentVal;
    }

    // Reduce interval
    h = Math.floor(h / 3);
  }

  return arr;
}

// Example usage:
const unsortedArray = [10, 5, 8, 3, 2, 6, 4, 7, 9, 1];
const sortedArray = shellSort(unsortedArray);
console.log(sortedArray);
