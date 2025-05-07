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
    // Each pass places the largest element at the end
    n--;
  } while (swapped);

  return arr;
}

// Example usage:
const sortedArray = bubbleSort([5, 3, 8, 4, 2]);
console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
