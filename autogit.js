function bubbleSort(arr) {
  var len = arr.length;
  var isSwapped;
  
  do {
    isSwapped = false;

    for (var i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);
  
  return arr;
}

// Testing the bubbleSort function
var array = [5, 3, 8, 2, 1, 4];
console.log("Before sorting:", array);
console.log("After sorting:", bubbleSort(array));
