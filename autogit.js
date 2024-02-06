function bubbleSort(arr) {
  var len = arr.length;
  var swapped;

  do {
    swapped = false;
    for (var i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}
var arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr)); // Output: [2, 3, 4, 5, 8]
