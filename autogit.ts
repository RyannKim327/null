function insertionSort(arr: number[]): number[] {
  // Make a copy to avoid mutating the original array
  const sortedArr = [...arr];

  for (let i = 1; i < sortedArr.length; i++) {
    const current = sortedArr[i];
    let j = i - 1;

    // Shift elements that are greater than current to the right
    while (j >= 0 && sortedArr[j] > current) {
      sortedArr[j + 1] = sortedArr[j];
      j--;
    }

    // Insert the current element at the correct position
    sortedArr[j + 1] = current;
  }

  return sortedArr;
}
