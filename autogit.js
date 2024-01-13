function bubbleSort(arr) {
  var len = arr.length;
  var swapped;
  
  do {
    swapped = false;
    
    for (var i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        
        swapped = true;
      }
    }
  } while (swapped);
  
  return arr;
}

// Example usage
var numbers = [5, 3, 8, 4, 2];
console.log("Before sorting:", numbers);
console.log("After sorting:", bubbleSort(numbers));
Before sorting: [5, 3, 8, 4, 2]
After sorting: [2, 3, 4, 5, 8]
