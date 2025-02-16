function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  let swapped: boolean;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap arr[i] and arr[i + 1]
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    // Reduce n because the last element is already in place
    n--;
  } while (swapped);

  return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", array);
const sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);
