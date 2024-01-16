function shellSort(array) {
  const gaps = [701, 301, 132, 57, 23, 10, 4, 1];

  for (let gap of gaps) {
    for (let i = gap; i < array.length; i++) {
      let temp = array[i];
      let j;

      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }

      array[j] = temp;
    }
  }

  return array;
}

// Example usage:
const arr = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(shellSort(arr));
