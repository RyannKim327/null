function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    let j = i;

    while (j > 0 && array[j - 1] > current) {
      array[j] = array[j - 1];
      j--;
    }

    array[j] = current;
  }

  return array;
}
const unsortedArray = [5, 2, 9, 1, 3];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 5, 9]
