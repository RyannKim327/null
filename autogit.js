function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// Example usage:
const array = [5, 3, 1, 4, 2];
console.log(insertionSort(array)); // Output: [1, 2, 3, 4, 5]
