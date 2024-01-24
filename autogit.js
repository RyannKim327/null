function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}

// Usage example:

const unsortedArray = [64, 25, 12, 22, 11];

console.log("Original array: " + unsortedArray);

const sortedArray = selectionSort(unsortedArray);

console.log("Sorted array: " + sortedArray);
