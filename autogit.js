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
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}
const unsortedArray = [5, 2, 9, 1, 7];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 5, 7, 9]
