function bubbleSort(arr) {
  var len = arr.length;
  var sorted;

  do {
    sorted = false;

    for (var i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = true;
      }
    }
  } while (sorted);

  return arr;
}

// Usage example:
var numbers = [8, 2, 5, 3, 9];
console.log(bubbleSort(numbers)); // Output: [2, 3, 5, 8, 9]
