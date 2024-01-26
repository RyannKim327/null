function shellSort(arr) {
  const len = arr.length;
  let gap = Math.floor(len / 2);

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
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
const array = [5, 9, 3, 1, 8, 6, 4, 2, 7];
const sortedArray = shellSort(array);
console.log(sortedArray); // Prints [1, 2, 3, 4, 5, 6, 7, 8, 9]
