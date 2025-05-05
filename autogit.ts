function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  let swapped: boolean;

  // Outer loop to control passes
  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    // Inner loop for comparing adjacent elements
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they're in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no swaps occurred in this pass, array is sorted
    if (!swapped) break;
  }

  return arr;
}
const numbers = [5, 3, 8, 4, 2];
console.log(bubbleSort(numbers)); // Output: [2, 3, 4, 5, 8]
