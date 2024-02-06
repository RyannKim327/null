function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Example usage:
const array = [5, 2, 9, 1, 3];

console.log(insertionSort(array)); // [1, 2, 3, 5, 9]
