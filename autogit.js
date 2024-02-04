function bubbleSort(array) {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}
const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
