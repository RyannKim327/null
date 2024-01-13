function bubbleSort(arr) {
  // ...
}
  let sorted = false;
  while (!sorted) {
    sorted = true;
    // ...
  }
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
    // Reduce the inner loop length by 1
    // as the largest element is already at its correct position
    for (let i = 0; i < arr.length - 1; i++) {
      // ...
    }
function bubbleSort(arr) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }
  return arr;
}
const unsortedArray = [5, 3, 1, 4, 2];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5]
