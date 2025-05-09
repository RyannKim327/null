function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  let swapped: boolean;

  // Repeat until no swaps occur
  do {
    swapped = false;

    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        // Swap adjacent elements if they are out of order
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }

    // After each pass, the largest element is at the end,
    // so we can reduce n to avoid re-checking it
    n--;
  } while (swapped);

  return arr;
}
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(numbers)); // [11, 12, 22, 25, 34, 64, 90]
