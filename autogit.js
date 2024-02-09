function shellSort(arr) {
  let len = arr.length;
  let gap = Math.floor(len / 2);

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      for (let j = i; j >= gap && arr[j - gap] > arr[j]; j -= gap) {
        // swap elements
        let temp = arr[j];
        arr[j] = arr[j - gap];
        arr[j - gap] = temp;
      }
    }
    gap = Math.floor(gap / 2);
  }

  return arr;
}

// Example usage:
const array = [5, 2, 9, 1, 7];
console.log(shellSort(array)); // Output: [1, 2, 5, 7, 9]
