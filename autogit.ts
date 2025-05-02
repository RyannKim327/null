function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1]; // Take the last element as pivot
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

// Example usage:
const numbers = [3, 6, 1, 7, 2, 8, 4];
console.log(quicksort(numbers));  // Output: [1, 2, 3, 4, 6, 7, 8]
