function insertionSort(arr) {
  // Iterate over each element in the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];  // Current element to be inserted at the right position
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than the current element, to one position ahead of their current position
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];  // Shift elements to the right
      j--;
    }

    arr[j + 1] = current;  // Insert the current element at its correct position
  }

  return arr;
}

// Example usage:
let array = [64, 34, 25, 12, 22, 11, 90];
console.log(insertionSort(array));
