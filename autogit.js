function bubbleSort(arr) {
  let len = arr.length;
  
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swapping elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  
  return arr;
}

// Example usage
let array = [5, 8, 2, 1, 6, 3, 7, 4];
console.log("Before sorting:", array);
console.log("After sorting:", bubbleSort(array));
