function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Test the bubbleSort function
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:");
console.log(arr);
console.log("Sorted array:");
console.log(bubbleSort(arr));
