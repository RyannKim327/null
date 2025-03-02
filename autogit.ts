function mergeSortIterative(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr; // If the array is already sorted
  }

  const n = arr.length;
  // Create an auxiliary array to help with the merging process
  const aux = new Array(n);

  // Start with a size of 1 for the sub-arrays to be merged
  for (let size = 1; size < n; size *= 2) {
    for (let left = 0; left < n; left += size * 2) {
      const mid = Math.min(left + size, n);
      const right = Math.min(left + size * 2, n);

      // Merge the two halves
      merge(arr, aux, left, mid, right);
    }
  }

  return arr;
}

function merge(arr: number[], aux: number[], left: number, mid: number, right: number): void {
  // Copy the current segment to the auxiliary array
  for (let i = left; i < right; i++) {
    aux[i] = arr[i];
  }

  let i = left; // Pointer for the left sub-array
  let j = mid;  // Pointer for the right sub-array

  // Merge the two halves back into the original array
  for (let k = left; k < right; k++) {
    if (i >= mid) {
      arr[k] = aux[j++];
    } else if (j >= right) {
      arr[k] = aux[i++];
    } else if (aux[i] <= aux[j]) {
      arr[k] = aux[i++];
    } else {
      arr[k] = aux[j++];
    }
  }
}

// Example usage
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSortIterative(unsortedArray);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
