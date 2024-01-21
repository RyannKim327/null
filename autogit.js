function shellSort(array) {
  var gap = Math.floor(array.length / 2);
  
  while (gap > 0) {
    for (var i = gap; i < array.length; i++) {
      var temp = array[i];
      
      for (var j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }
      
      array[j] = temp;
    }
    
    gap = Math.floor(gap / 2);
  }
  
  return array;
}

// Example usage:
var array = [7, 2, 9, 1, 6, 3];
console.log("Before sorting:", array);
console.log("After sorting:", shellSort(array));
