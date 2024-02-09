function shellSort(arr) {
  var len = arr.length;
  var gap = Math.floor(len / 2);
  
  while (gap > 0) {
    for (var i = gap; i < len; i++) {
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
var array = [8, 4, 1, 6, -2, 9, 0, 3, 5];
console.log("Unsorted array:", array);
console.log("Sorted array:", shellSort(array));
