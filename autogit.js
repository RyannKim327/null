function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    let min = array[i];
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (array[j] < min) {
        min = array[j];
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}
const unsortedArray = [5, 2, 9, 1, 7, 3];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray);
// Output: [1, 2, 3, 5, 7, 9]
