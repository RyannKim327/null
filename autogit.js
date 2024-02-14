function countingSort(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  var count = new Array(max - min + 1).fill(0);
  var sortedArr = [];

  // Count frequencies of elements
  for (var i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  // Build the sorted array
  for (var j = 0; j < count.length; j++) {
    while (count[j] > 0) {
      sortedArr.push(j + min);
      count[j]--;
    }
  }

  return sortedArr;
}

// Example usage:
var arr = [4, 3, 2, 7, 5, 6, 1];
var sortedArr = countingSort(arr);
console.log(sortedArr);
