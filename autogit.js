function bubbleSort(arr) {
  let len = arr.length;
  let swapped;
  
  do {
    swapped = false;
    
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        
        swapped = true;
      }
    }
  } while (swapped);
  
  return arr;
}

// Usage example:
let unsortedArray = [5, 3, 8, 4, 2];
let sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
