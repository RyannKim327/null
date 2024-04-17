function shellSort(arr) {
  var len = arr.length,
      gap = Math.floor(len / 2);

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

// Example usage
var arr = [5, 3, 8, 2, 1, 4];
console.log("Before sorting: ", arr);
shellSort(arr);
console.log("After sorting: ", arr);
