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
      // Swap values
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}

// Example usage:
const unsortedArray = [5, 2, 8, 12, 1, 6];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray);
