function insertionSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Example usage:
const unsortedArray = [5, 2, 4, 6, 1, 3];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // [1, 2, 3, 4, 5, 6]
