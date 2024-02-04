function bubbleSort(array) {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  }

  return array;
}
const unsortedArray = [5, 2, 8, 1, 3];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // [1, 2, 3, 5, 8]
