function bubbleSort(array) {
  var len = array.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

// Example usage
var myArray = [5, 3, 8, 4, 2];
console.log(bubbleSort(myArray));
// Output: [2, 3, 4, 5, 8]
