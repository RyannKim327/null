function mergeSortIterative(arr) {
  var len = arr.length;
  var size, leftStart;

  for (size = 1; size < len; size *= 2) {
    for (leftStart = 0; leftStart < len; leftStart += 2 * size) {
      var mid = leftStart + size - 1;
      var rightEnd = Math.min(leftStart + 2 * size - 1, len - 1);

      merge(arr, leftStart, mid, rightEnd);
    }
  }

  return arr;
}

function merge(arr, leftStart, mid, rightEnd) {
  var leftEnd = mid;
  var rightStart = mid + 1;

  var left = arr.slice(leftStart, leftEnd + 1);
  var right = arr.slice(rightStart, rightEnd + 1);

  var i = 0; // Pointer for the left subarray
  var j = 0; // Pointer for the right subarray
  var k = leftStart; // Pointer for the merged array

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

// Usage example:
var arr = [56, 3, 41, 8, 1, 67, 32, 15];
console.log(mergeSortIterative(arr));
