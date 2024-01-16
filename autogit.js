function bubbleSort(arr) {
  var len = arr.length;

  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      // Swap adjacent elements if they are in the wrong order
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
var numbers = [5, 3, 8, 4, 2];
console.log(bubbleSort(numbers)); // Output: [2, 3, 4, 5, 8]
