function shellSort(arr) {
  const length = arr.length;
  let gap = 1;

  while (gap < length / 3) {
    gap = gap * 3 + 1;
  }

  while (gap > 0) {
    for (let i = gap; i < length; i++) {
      let temp = arr[i];
      let j = i;

      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }

    gap = (gap - 1) / 3;
  }

  return arr;
}

// Example usage
const unsortedArray = [12, 34, 54, 2, 3];
const sortedArray = shellSort(unsortedArray);
console.log(sortedArray);  // Output: [2, 3, 12, 34, 54]
