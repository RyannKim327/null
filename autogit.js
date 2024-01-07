function shellSort(array) {
  let gap = Math.floor(array.length / 2);
  
  while (gap > 0) {
    for (let i = gap; i < array.length; i++) {
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
const unsortedArray = [9, 5, 1, 8, 3, 7, 6, 2, 4];
const sortedArray = shellSort(unsortedArray);
console.log(sortedArray);
