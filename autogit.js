function bubbleSort(arr) {
  var len = arr.length;
  
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  
  return arr;
}

// Example usage:
var unsortedArray = [5, 3, 8, 2, 1, 4];
var sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // [1, 2, 3, 4, 5, 8]
