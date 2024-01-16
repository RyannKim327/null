function bubbleSort(arr) {
  const length = arr.length;
  for (let i = length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const numbers = [5, 3, 8, 2, 1, 4];
console.log(bubbleSort(numbers)); // Output: [1, 2, 3, 4, 5, 8]
