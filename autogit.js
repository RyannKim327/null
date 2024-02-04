function bubbleSort(arr) {
  const len = arr.length;
  let swapped;
  
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  
  return arr;
}

// Example usage:
const unsortedArray = [9, 5, 2, 8, 1, 0, 6, 4, 3, 7];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray);  // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
