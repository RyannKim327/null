function bubbleSort(arr) {
  var len = arr.length;
  
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  
  return arr;
}

// Example usage:
var unsortedArray = [5, 3, 8, 1, 2, 9];
var sortedArray = bubbleSort(unsortedArray);

console.log(sortedArray);
