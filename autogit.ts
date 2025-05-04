function shellSort(arr: number[]): number[] {
  const n = arr.length;
  // Start with a big gap, then reduce it
  let gap = Math.floor(n / 2);

  // Gap starts at n/2 and halves each iteration
  while (gap > 0) {
    // Do a gapped insertion sort for this gap size
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;

      // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      // Put temp (the original arr[i]) in its correct location
      arr[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  return arr;
}
