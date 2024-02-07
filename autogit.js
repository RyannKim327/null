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
const array = [10, 7, 5, 3, 8, 2, 6, 9, 1, 4];
console.log(shellSort(array)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
