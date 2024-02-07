function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
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
const unsortedArray = [5, 3, 8, 1, 2, 4];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 8]
