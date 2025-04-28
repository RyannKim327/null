function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    // Shift elements greater than key to the right
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place the key at its correct position
    arr[j + 1] = key;
  }
  return arr;
}

// Example usage:
const numbers = [5, 2, 9, 1, 5, 6];
console.log(insertionSort(numbers));  // Output: [1, 2, 5, 5, 6, 9]
function insertionSort<T>(arr: T[], compare: (a: T, b: T) => number): T[] {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && compare(arr[j], key) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Usage with numbers
const nums = [3, 1, 4, 1, 5, 9];
console.log(insertionSort(nums, (a, b) => a - b));
