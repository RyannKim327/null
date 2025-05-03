function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  let swapped: boolean;

  // Repeat until no swaps are made
  do {
    swapped = false;

    // Traverse the array
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        // Swap adjacent elements if they are in the wrong order
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }
    // After each pass, the largest element settles at the end, so reduce n
    n--;
  } while (swapped);

  return arr;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray);  // Output: [11, 12, 22, 25, 34, 64, 90]
