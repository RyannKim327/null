function insertionSort(arr) {
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    const currentValue = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentValue;
  }

  return arr;
}

// Example usage:
const array = [5, 2, 6, 1, 3, 9];
console.log(insertionSort(array)); // Output: [1, 2, 3, 5, 6, 9]
