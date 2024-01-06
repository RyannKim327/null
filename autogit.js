function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivot = arr[Math.floor(arr.length / 2)];
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return quicksort(left).concat([pivot], quicksort(right));
}
var array = [6, 2, 9, 5, 1, 7];
var sortedArray = quicksort(array);

console.log(sortedArray); // [1, 2, 5, 6, 7, 9]
