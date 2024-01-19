function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivot = arr[0];
  var lesser = [];
  var greater = [];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return quicksort(lesser).concat(pivot, quicksort(greater));
}

// Example usage:
var array = [5, 8, 2, 9, 1, 10, 7];
console.log(quicksort(array)); // Outputs: [1, 2, 5, 7, 8, 9, 10]
