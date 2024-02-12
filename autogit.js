function shellSort(array) {
  const length = array.length;
  let gap = Math.floor(length / 2);

  while (gap > 0) {
    for (let i = gap; i < length; i++) {
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
const array = [9, 5, 1, 8, 2, 7, 3];
console.log(shellSort(array)); // Output: [1, 2, 3, 5, 7, 8, 9]
