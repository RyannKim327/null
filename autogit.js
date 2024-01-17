function bubbleSort(arr) {
  var i, j;
  var len = arr.length;
  var swapped;
  
  for (i = 0; i < len - 1; i++) {
    swapped = false;
    
    for (j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        
        swapped = true;
      }
    }
    
    // If no elements were swapped in the inner loop, then the array is already sorted
    if (!swapped) {
      break;
    }
  }
  
  return arr;
}

// Usage example:
var array = [9, 4, 10, 3, 1];
console.log(bubbleSort(array)); // Output: [1, 3, 4, 9, 10]
