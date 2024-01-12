function shellSort(array) {
  let gap = Math.floor(array.length / 2); // Initial gap size

  while (gap > 0) {
    for (let i = gap; i < array.length; i++) {
      let temp = array[i];
      let j;

      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }

      array[j] = temp;
    }

    gap = Math.floor(gap / 2); // Reduce the gap size
  }

  return array;
}
let arr = [8, 4, 1, 6, 9, 2];
console.log(shellSort(arr)); // Output: [1, 2, 4, 6, 8, 9]
