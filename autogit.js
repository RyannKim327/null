function shellSort(arr) {
  const len = arr.length;
  let gap = Math.floor(len / 2);

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      const temp = arr[i];
      let innerIndex = i;

      while (innerIndex >= gap && arr[innerIndex - gap] > temp) {
        arr[innerIndex] = arr[innerIndex - gap];
        innerIndex -= gap;
      }

      arr[innerIndex] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  return arr;
}
const arr = [9, 4, 1, 7, 3, 6, 2, 8, 5];
const sortedArr = shellSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
