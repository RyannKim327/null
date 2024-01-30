function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements using a temporary variable
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Test the bubbleSort function
var arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr));  // Output: [2, 3, 4, 5, 8]
