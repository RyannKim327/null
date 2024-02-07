function shellSort(arr) {
  const length = arr.length;
  let gap = Math.floor(length / 2);
  while (gap > 0) {
    for (let i = gap; i < length; i++) {
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

// Example usage:
const unsortedArray = [7, 2, 9, 4, 6, 1, 3, 8, 5];
const sortedArray = shellSort(unsortedArray);
console.log(sortedArray);
[1, 2, 3, 4, 5, 6, 7, 8, 9]
