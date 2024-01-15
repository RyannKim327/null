function bubbleSort(arr) {
  var len = arr.length;
  var isSwapped;
  
  do {
    isSwapped = false;
    
    for (var i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        isSwapped = true;
      }
    }
    
    len--;
  } while (isSwapped);
  
  return arr;
}

// Example usage:
var unsortedArray = [5, 3, 8, 2, 1, 4];
var sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); 
