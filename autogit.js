function bubbleSort(arr) {
  // Outer loop for iterating through the array
  for (let i = 0; i < arr.length - 1; i++) {
    // Inner loop for comparing adjacent elements
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Swap elements if the current element is greater than the next element
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  
  return arr;
}

// Example usage:
let myArray = [5, 3, 8, 4, 2];
console.log("Before sorting:", myArray);
console.log("After sorting:", bubbleSort(myArray));
