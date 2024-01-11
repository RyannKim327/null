function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}
const unsortedArray = [7, 2, 4, 1, 5, 3];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);
