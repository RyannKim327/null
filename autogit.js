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
var myArray = [5, 3, 8, 4, 2];
var sortedArray = shellSort(myArray);

console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
