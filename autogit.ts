function gnomeSort(arr: number[]): number[] {
  let i = 1;
  while (i < arr.length) {
    if (arr[i] >= arr[i - 1]) {
      i++;
    } else {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      if (i > 1) {
        i--;
      } else {
        i++;
      }
    }
  }
  return arr;
}

// Example usage:
const unsorted = [34, 2, 78, 1, 56, 99, 23];
console.log('Sorted:', gnomeSort(unsorted));
