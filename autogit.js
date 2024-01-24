function bubbleSort(arr) {
  var len = arr.length;
  var isSwapped;

  for (var i = 0; i < len - 1; i++) {
    isSwapped = false;

    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }

    // If no swapping occurred in the inner loop, the array is already sorted
    if (!isSwapped) {
      break;
    }
  }

  return arr;
}

// Usage example:
var numbers = [5, 3, 8, 2, 1, 4];
console.log("Before sorting:", numbers);

var sortedNumbers = bubbleSort(numbers);
console.log("After sorting:", sortedNumbers);
