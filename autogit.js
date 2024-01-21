function shellSort(array) {
  var length = array.length;
  var gap = Math.floor(length / 2);

  while (gap > 0) {
    for (var i = gap; i < length; i++) {
      var temp = array[i];
      var j = i;
  
      while (j >= gap && array[j - gap] > temp) {
        array[j] = array[j - gap];
        j -= gap;
      }
  
      array[j] = temp;
    }
  
    gap = Math.floor(gap / 2);
  }

  return array;
}
var arr = [9, 5, 1, 3, 8, 4, 7, 2, 6];
console.log(shellSort(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
