function bubbleSort(array) {
  var len = array.length;
  var swapped;
  
  do {
    swapped = false;
    for (var i = 0; i < len - 1; i++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  
  return array;
}

// Example usage:
var arr = [34, 23, 12, 45, 9, 1, 24];
console.log("Original array:", arr);
console.log("Sorted array:", bubbleSort(arr));
