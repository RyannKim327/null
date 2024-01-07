function insertionSort(array) {
  const length = array.length;

  for (let i = 1; i < length; i++) {
    let current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;
}
const unsortedArray = [7, 3, 9, 2, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);
