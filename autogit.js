function bubbleSort(arr) {
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    // Last i elements are already in place
    for (var j = 0; j < len - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Testing the function
var numbers = [5, 3, 8, 4, 2];
console.log("Unsorted array:", numbers);
console.log("Sorted array:", bubbleSort(numbers));
