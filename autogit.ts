function insertionSort(arr: number[]): number[] {
  // Make a copy of the array to avoid mutating the original
  const result = [...arr];

  for (let i = 1; i < result.length; i++) {
    let key = result[i];
    let j = i - 1;

    // Move elements of result[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = key;
  }

  return result;
}
