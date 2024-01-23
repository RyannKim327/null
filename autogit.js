function selectionSort(arr) {
  const length = arr.length;
  
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    
    // Find the index of the smallest element in the remaining unsorted part of the array
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap the smallest element with the current element
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  
  return arr;
}

// Example usage:
const array = [64, 25, 12, 22, 11];
console.log(selectionSort(array)); // Output: [11, 12, 22, 25, 64]
