function bubbleSort(arr) {
  var len = arr.length;
  var swapped;
  
  do {
    swapped = false;
    for (var i = 0; i < len-1; i++) {
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

// Usage example:
var numbers = [8, 3, 2, 10, 4];
console.log("Original array: " + numbers);
console.log("Sorted array: " + bubbleSort(numbers));
