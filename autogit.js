function shellSort(array) {
  const len = array.length;
  let gap = Math.floor(len / 2);

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let j = i;
      let temp = array[i];

      while (j >= gap && array[j - gap] > temp) {
        array[j] = array[j - gap];
        j -= gap;
      }

      array[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  return array;
}

// Example usage:
const arr = [8, 3, 11, 5, 2, 9, 1, 6];
console.log(shellSort(arr)); // Output: [1, 2, 3, 5, 6, 8, 9, 11]
