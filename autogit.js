function bubbleSort(arr) {
  var len = arr.length;
  
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swapping elements
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  
  return arr;
}

// Example usage
var array = [5, 3, 8, 2, 1, 4];
console.log("Original array:", array);
console.log("Sorted array:", bubbleSort(array));
