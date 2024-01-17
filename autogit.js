function shellSort(array) {
  const length = array.length;
  let gap = Math.floor(length / 2);

  while (gap > 0) {
    for (let i = gap; i < length; i++) {
      let temp = array[i];
      let j = i;

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
const arr = [8, 3, 11, 5, 2, 9, 0, 1];
console.log(shellSort(arr)); // Output: [0, 1, 2, 3, 5, 8, 9, 11]
