function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1; j++) {
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
var unsortedArray = [5, 3, 8, 1, 2];
console.log("Unsorted array:", unsortedArray);

var sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);
