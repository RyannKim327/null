function bubbleSort(array) {
  var len = array.length;
  var swapped;
  
  do {
    swapped = false;
    
    for (var i = 0; i < len-1; i++) {
      if (array[i] > array[i+1]) {
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  
  return array;
}

// Usage example:
var numbers = [5, 2, 10, 8, 1, 4];
console.log(bubbleSort(numbers)); // Output: [1, 2, 4, 5, 8, 10]
