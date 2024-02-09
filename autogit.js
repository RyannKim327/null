function selectionSort(arr) {
  var length = arr.length;

  for (var i = 0; i < length - 1; i++) {
    var minIndex = i;

    for (var j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // swap elements
      var temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

// Example usage
var myArray = [5, 3, 8, 2, 1, 4];
console.log(selectionSort(myArray)); // Output: [1, 2, 3, 4, 5, 8]
