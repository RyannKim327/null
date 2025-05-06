function insertionSort(arr: number[]): number[] {
  // Make a copy to avoid mutating the original array
  const sorted = [...arr];

  for (let i = 1; i < sorted.length; i++) {
    let current = sorted[i];
    let j = i - 1;

    // Move elements of sorted[0..i-1] that are greater than current, one position ahead
    while (j >= 0 && sorted[j] > current) {
      sorted[j + 1] = sorted[j];
      j--;
    }
    sorted[j + 1] = current;
  }

  return sorted;
}
