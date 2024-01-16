function shellSort(array) {
  const length = array.length;
  let gap = Math.floor(length / 2);

  while (gap > 0) {
    for (let i = gap; i < length; i++) {
      let temp = array[i];
      let j;

      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }

      array[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  return array;
}

// Example usage:
const arr = [9, 4, 8, 2, 1, 5, 7, 3, 6];
console.log(shellSort(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
