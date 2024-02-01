function selectionSort(arr) {
  // Iterate through the entire array
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i; // Assume the current element is the minimum

    // Find the index of the minimum element in the unsorted part of the array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}
const arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr)); // Outputs: [11, 12, 22, 25, 64]
