function shellSort(arr: number[]): number[] {
  const n = arr.length;

  // Start with a big gap, then reduce it
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Do a gapped insertion sort for this gap size
    for (let i = gap; i < n; i++) {
      const temp = arr[i];

      // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      // Put temp (the original arr[i]) in its correct location
      arr[j] = temp;
    }
  }

  return arr;
}
const example = [23, 42, 4, 16, 8, 15];
console.log(shellSort(example)); // Output: [4, 8, 15, 16, 23, 42]
