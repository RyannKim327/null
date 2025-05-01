function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const less: number[] = [];
  const equal: number[] = [];
  const greater: number[] = [];

  for (const num of arr) {
    if (num < pivot) {
      less.push(num);
    } else if (num > pivot) {
      greater.push(num);
    } else {
      equal.push(num);
    }
  }

  return [...quicksort(less), ...equal, ...quicksort(greater)];
}

// Example usage:
const unsorted = [3, 6, 8, 10, 1, 2, 1];
console.log(quicksort(unsorted));
// Output: [1, 1, 2, 3, 6, 8, 10]
