function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}

// Example usage:
const unsortedArray = [64, 25, 12, 22, 11];
console.log(selectionSort(unsortedArray)); // Output: [11, 12, 22, 25, 64]
