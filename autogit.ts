function selectionSort(arr: number[]): number[] {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the minimum is the first element
    let minIndex = i;

    // Check the rest of the array for a smaller element
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap if a smaller element is found
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}
const numbers = [64, 25, 12, 22, 11];
console.log(selectionSort(numbers)); // Output: [11, 12, 22, 25, 64]
