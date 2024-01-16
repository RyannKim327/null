function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
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
const numbers = [5, 3, 8, 2, 1, 4];
const sortedNumbers = insertionSort(numbers);
console.log(sortedNumbers);
