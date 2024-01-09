function shellSort(arr) {
  const len = arr.length;
  let gap = 1;

  // Generating the gap sequence
  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      const temp = arr[i];
      let j = i;

      // Shifting elements that are greater than temp
      while (j > gap - 1 && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }

    // Decrease the gap for the next iteration
    gap = Math.floor(gap / 3);
  }

  return arr;
}

// Example usage:
const array = [8, 4, 1, 6, 4, 2, 9, 0, 3, 7, 5];
console.log(shellSort(array)); // Output: [0, 1, 2, 3, 4, 4, 5, 6, 7, 8, 9]
