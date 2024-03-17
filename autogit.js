function selectionSort(arr) {
  // Loop through the entire array
  for (let i = 0; i < arr.length; i++) {
    // Find the index of the minimum element in the remaining unsorted portion of the array
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the minimum element with the current element
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

// Test the selectionSort function
let arr = [64, 25, 12, 22, 11];
console.log("Original array: " + arr);
console.log("Sorted array: " + selectionSort(arr));
