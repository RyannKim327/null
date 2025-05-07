function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr; // Base case: arrays with 0 or 1 elem are already sorted
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const less: number[] = [];
  const equal: number[] = [];
  const greater: number[] = [];

  for (const num of arr) {
    if (num < pivot) {
      less.push(num);
    } else if (num === pivot) {
      equal.push(num);
    } else {
      greater.push(num);
    }
  }

  // Recursively sort and then combine the results
  return [...quicksort(less), ...equal, ...quicksort(greater)];
}

// Example usage:
const unsorted = [5, 3, 8, 4, 2];
const sorted = quicksort(unsorted);
console.log(sorted); // [2, 3, 4, 5, 8]
