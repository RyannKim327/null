function insertionSort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let key = arr[i]; // current element to be compared

    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      // move elements greater than key to one position ahead
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key; // insert the key element in its correct position
  }
  return arr;
}

// Usage example:
const array = [5, 2, 4, 6, 1, 3];
console.log(insertionSort(array)); // Output: [1, 2, 3, 4, 5, 6]
