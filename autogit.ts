function quicksort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const less = arr.filter(value => value < pivot);
  const equal = arr.filter(value => value === pivot);
  const greater = arr.filter(value => value > pivot);

  return [...quicksort(less), ...equal, ...quicksort(greater)];
}

// Example usage:
const unsorted = [5, 3, 8, 4, 2, 7, 1, 10];
const sorted = quicksort(unsorted);
console.log(sorted);  // Output: [1, 2, 3, 4, 5, 7, 8, 10]
