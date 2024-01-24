function insertionSort(array) {
  const length = array.length;

  for (let i = 1; i < length; i++) {
    const temp = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = temp;
  }

  return array;
}

// Test the function
const arr = [5, 2, 4, 6, 1, 3];
console.log(insertionSort(arr)); // Output: [1, 2, 3, 4, 5, 6]
