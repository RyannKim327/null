function bubbleSort(arr) {
  const len = arr.length;
  
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  
  return arr;
}

// Usage example
const numbers = [10, 5, 8, 3, 2, 7, 6, 4, 1, 9];
console.log("Before sorting:", numbers);
console.log("After sorting:", bubbleSort(numbers));
