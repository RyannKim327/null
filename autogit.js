function insertionSort(array) {
  const arr = [...array];

  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentValue;
  }

  return arr;
}
const unsortedArray = [5, 2, 9, 1, 7];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);  // Output: [1, 2, 5, 7, 9]
