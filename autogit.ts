function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr; // Base case: arrays with 0 or 1 element are already sorted
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
const numbers = [4, 2, 7, 1, 3];
const sorted = quicksort(numbers);
console.log(sorted); // Output: [1, 2, 3, 4, 7]
