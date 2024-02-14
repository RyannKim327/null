function shellSort(array) {
  const len = array.length;
  let gap = Math.floor(len / 2);

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      const temp = array[i];
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
const arr = [5, 2, 8, 9, 1, 3];
console.log(shellSort(arr)); // [1, 2, 3, 5, 8, 9]
