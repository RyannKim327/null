function selectionSort(array) {
  // Implementation goes here
}
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // Find the minimum element in the remaining unsorted array
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the minimum element with the first element in the unsorted portion of the array
    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}
let arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr)); // Output: [11, 12, 22, 25, 64]
