function bubbleSort(arr) {
  var len = arr.length;
  var swapped;
  
  do {
    swapped = false;
    
    for (var i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  
  return arr;
}

// Usage:
var unsortedArray = [5, 3, 8, 2, 1, 4];
var sortedArray = bubbleSort(unsortedArray);

console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 8]
