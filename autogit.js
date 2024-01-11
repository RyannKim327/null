function insertionSort(arr) {
  // Iterate through each element in the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Store the current element in a temporary variable
    let current = arr[i];
    // Store the index of the previous element
    let j = i - 1;

    // Move the elements of the sorted sub-array that are greater than the current element
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place the current element in its correct position in the sorted sub-array
    arr[j + 1] = current;
  }

  return arr;
}

// Example usage:
const array = [5, 8, 2, 1, 6, 3, 7, 4];
console.log(insertionSort(array));
