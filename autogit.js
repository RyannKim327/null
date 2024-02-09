function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivot = arr[Math.floor(arr.length / 2)];
  var left = [];
  var middle = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      middle.push(arr[i]);
    }
  }

  return quicksort(left).concat(middle, quicksort(right));
}

// Example usage:
var arr = [5, 8, 3, 1, 9, 2, 7, 6];
console.log(quicksort(arr)); // Outputs: [1, 2, 3, 5, 6, 7, 8, 9]
