function shellSort(array) {
  const len = array.length;
  let gap = Math.floor(len / 2);

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
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
const unsortedArray = [5, 9, 1, 3, 6, 2, 8, 4, 7];
const sortedArray = shellSort(unsortedArray);

console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
