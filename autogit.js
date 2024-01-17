function shellSort(arr) {
  const n = arr.length;
  let gap = 5; // Using (5, 3, 1) gap sequence for simplicity

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;

      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  return arr;
}

// Example usage:
const array = [9, 5, 1, 8, 3, 10, 2, 7, 6, 4];
console.log(shellSort(array));
