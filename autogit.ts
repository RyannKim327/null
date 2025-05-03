function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example:
const unsorted = [5, 3, 8, 4, 2];
console.log(quicksort(unsorted)); // Output: [2, 3, 4, 5, 8]
