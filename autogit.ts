function insertionSort(arr: number[]): number[] {
  // Make a copy of the array to avoid mutating the input
  const sortedArr = [...arr];

  for (let i = 1; i < sortedArr.length; i++) {
    const key = sortedArr[i];
    let j = i - 1;

    // Move elements of sortedArr[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && sortedArr[j] > key) {
      sortedArr[j + 1] = sortedArr[j];
      j--;
    }
    sortedArr[j + 1] = key;
  }

  return sortedArr;
}
