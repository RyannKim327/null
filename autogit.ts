function shellSort(arr: number[]): void {
  const n = arr.length;

  // Start with a big gap, then reduce the gap
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Do a gapped insertion sort for this gap size.
    // The first gap elements arr[0..gap-1] are already in gapped order
    // Keep adding one more element until the entire array is gap sorted
    for (let i = gap; i < n; i++) {
      // Save the current element and create a variable for shifting
      const temp = arr[i];
      let j = i;

      // Shift earlier gap-sorted elements up until the correct
      // location for arr[i] is found
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      // Put temp (the original arr[i]) in its correct location
      arr[j] = temp;
    }
  }
}
const numbers = [23, 12, 1, 8, 34, 54, 2, 3];
shellSort(numbers);
console.log(numbers); // Output will be a sorted array
