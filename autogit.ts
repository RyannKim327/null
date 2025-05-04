function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;  // Base case: arrays with 0 or 1 element are already sorted

  const pivot = arr[Math.floor(arr.length / 2)];  // Choose pivot roughly in the middle
  const less = arr.filter(x => x < pivot);
  const equal = arr.filter(x => x === pivot);
  const greater = arr.filter(x => x > pivot);

  return [...quicksort(less), ...equal, ...quicksort(greater)];
}
