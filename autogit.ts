function selectionSort(arr: number[]): void {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}

// Example usage:
const arr = [5, 2, 8, 3, 1, 6, 4];
selectionSort(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 8]
function selectionSort<T>(arr: T[]): void {
  // ...
}
