function insertionSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
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
const numbers = [5, 2, 4, 6, 1, 3];
const sortedNumbers = insertionSort(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5, 6]
