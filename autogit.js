function insertionSort(arr) {
  // Loop through each element in the array
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // Current element to be inserted at the right position

    // Compare the current element with the sorted subarray on its left
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // Move elements greater than current to the right
      j--;
    }
    arr[j + 1] = current; // Insert the current element at the right position
  }

  return arr;
}

// Example usage
const array = [5, 2, 4, 6, 1, 3];
console.log(insertionSort(array)); // Output: [1, 2, 3, 4, 5, 6]
