function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr; // Base case: arrays with 0 or 1 element are already sorted
  }

  const pivot = arr[arr.length - 1]; // Choosing the last element as pivot
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Elements less than pivot
    } else {
      right.push(arr[i]); // Elements greater or equal to pivot
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}
const nums = [3, 6, 1, 8, 4, 5];
const sorted = quicksort(nums);
console.log(sorted); // Output: [1, 3, 4, 5, 6, 8]
