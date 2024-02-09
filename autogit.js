function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap elements
    }
  }
  return arr;
}

// Example usage:
const array = [5, 3, 1, 4, 2];
console.log(selectionSort(array)); // Output: [1, 2, 3, 4, 5]
