function insertionSort(arr: number[]): number[] {
  // Make a copy to avoid mutating the original array
  const sortedArr = [...arr];

  for (let i = 1; i < sortedArr.length; i++) {
    let currentValue = sortedArr[i];
    let j = i - 1;

    // Shift elements of sortedArr[0..i-1] that are greater than currentValue to one position ahead
    while (j >= 0 && sortedArr[j] > currentValue) {
      sortedArr[j + 1] = sortedArr[j];
      j--;
    }

    // Insert the current value into its correct position
    sortedArr[j + 1] = currentValue;
  }

  return sortedArr;
}
const unsorted = [5, 3, 8, 4, 2];
const sorted = insertionSort(unsorted);
console.log(sorted);  // Output: [2, 3, 4, 5, 8]
