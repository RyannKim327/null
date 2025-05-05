function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  let swapped: boolean;

  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        // Swap elements
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }
    // After each pass, the largest element is bubbled to the end
    n--;
  } while (swapped);

  return arr;
}

// Example:
const unsorted = [64, 34, 25, 12, 22, 11, 90];
console.log('Sorted:', bubbleSort(unsorted));
