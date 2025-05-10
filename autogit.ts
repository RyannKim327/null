function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr; // Base case: already sorted
  }

  const pivot = arr[arr.length - 1]; // Choose last element as pivot
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort left and right, then concatenate with pivot
  return [...quicksort(left), pivot, ...quicksort(right)];
}
