function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivot = arr[Math.floor(arr.length / 2)];
  var less = [];
  var equal = [];
  var greater = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else if (arr[i] === pivot) {
      equal.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return quicksort(less).concat(equal, quicksort(greater));
}
var numbers = [5, 8, 1, 3, 9, 2];
var sortedNumbers = quicksort(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8, 9]
