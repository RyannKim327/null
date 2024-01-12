function shellSort(arr) {
  var len = arr.length;
  var gapSize = Math.floor(len / 2);

  while (gapSize > 0) {
    for (var i = gapSize; i < len; i++) {
      var temp = arr[i];
      var j = i;

      while (j >= gapSize && arr[j - gapSize] > temp) {
        arr[j] = arr[j - gapSize];
        j -= gapSize;
      }

      arr[j] = temp;
    }

    gapSize = Math.floor(gapSize / 2);
  }

  return arr;
}
var arr = [9, 5, 1, 3, 8, 4, 7, 2, 6];
console.log("Before sorting:", arr);
shellSort(arr);
console.log("After sorting:", arr);
Before sorting: [9, 5, 1, 3, 8, 4, 7, 2, 6]
After sorting: [1, 2, 3, 4, 5, 6, 7, 8, 9]
