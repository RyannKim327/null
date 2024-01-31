function shellSort(arr) {
  var length = arr.length;
  var gap = Math.floor(length / 2);
  
  while (gap > 0) {
    for (var i = gap; i < length; i++) {
      var temp = arr[i];
      var j = i;
      
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      
      arr[j] = temp;
    }
    
    gap = Math.floor(gap / 2);
  }
  
  return arr;
}

// Example usage:
var unsortedArray = [8, 4, 1, 6, 2, 7, 3, 5];
var sortedArray = shellSort(unsortedArray);
console.log(sortedArray);
