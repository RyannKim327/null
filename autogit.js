function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Testing the algorithm
var unsortedArray = [5, 3, 8, 1, 2, 7];
console.log('Unsorted Array:', unsortedArray);
var sortedArray = bubbleSort(unsortedArray);
console.log('Sorted Array:', sortedArray);
