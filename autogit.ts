function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    // Move elements greater than key one position ahead
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
const data = [5, 2, 9, 1, 5, 6];
console.log(insertionSort(data));  // Output: [1, 2, 5, 5, 6, 9]
