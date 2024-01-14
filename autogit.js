function shellSort(arr) {
  const n = arr.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
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
const array = [5, 2, 8, 4, 1, 9, 3, 7];
const sortedArray = shellSort(array);

console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 7, 8, 9]
