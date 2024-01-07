function shellSort(arr) {
  var gap = Math.floor(arr.length / 2);

  while (gap > 0) {
    for (var i = gap; i < arr.length; i++) {
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
var array = [8, 4, 1, 9, 3, 5];
console.log(shellSort(array)); // Output: [1, 3, 4, 5, 8, 9]
