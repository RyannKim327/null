function mergeSortIterative(arr) {
  var mergeSize = 1;
  var arrLength = arr.length;
  
  function merge(arr, left, mid, right) {
    var leftArr = arr.slice(left, mid + 1);
    var rightArr = arr.slice(mid + 1, right + 1);

    var i = 0, j = 0, k = left;
  
    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      k++;
    }
  
    while (i < leftArr.length) {
      arr[k] = leftArr[i];
      i++;
      k++;
    }
  
    while (j < rightArr.length) {
      arr[k] = rightArr[j];
      j++;
      k++;
    }
  }
  
  while (mergeSize < arrLength) {
    for (var start = 0; start < arrLength - mergeSize; start += 2 * mergeSize) {
      var mid = start + mergeSize - 1;
      var end = Math.min(start + 2 * mergeSize - 1, arrLength - 1);
      merge(arr, start, mid, end);
    }
    mergeSize *= 2;
  }
  
  return arr;
}

// Example usage:
var array = [5, 8, 1, 6, 2, 9, 3];
console.log("Original Array: ", array);
console.log("Sorted Array: ", mergeSortIterative(array));
