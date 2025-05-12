function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1]; // Choose the last element as the pivot
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

// Example usage
const unsorted = [5, 3, 8, 4, 2];
const sorted = quicksort(unsorted);
console.log(sorted); // Outputs: [2, 3, 4, 5, 8]
