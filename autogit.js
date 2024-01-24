function selectionSort(arr) {
  // Loop through each element of the array
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum value in the unsorted part of the array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum value with the first unsorted element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Test the implementation
const array = [64, 25, 12, 22, 11];
console.log(selectionSort(array)); // [11, 12, 22, 25, 64]
