function insertionSort(array) {
  const length = array.length;

  for (let i = 1; i < length; i++) {
    const current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;
}

// Example usage:
const arr = [4, 2, 8, 1, 5];
console.log(insertionSort(arr)); // Output: [1, 2, 4, 5, 8]
