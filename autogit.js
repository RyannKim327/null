function findSecondLargest(arr) {
  arr.sort(function(a, b) {
    return b - a; // Sort in descending order
  });

  return arr[1];
}

// Example usage
var array = [5, 10, 3, 8, 1];
var secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 8
function findSecondLargest(arr) {
  var max = Math.max(arr[0], arr[1]);
  var secondMax = Math.min(arr[0], arr[1]);

  for (var i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

// Example usage
var array = [5, 10, 3, 8, 1];
var secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 8
