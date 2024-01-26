function generateFibonacci(max) {
  var fibonacci = [0, 1];
  var i = 2;

  while (true) {
    var next = fibonacci[i - 1] + fibonacci[i - 2];
    if (next > max) break;
    fibonacci.push(next);
    i++;
  }
  
  return fibonacci;
}
function fibonacciSearch(arr, target) {
  var fibonacci = generateFibonacci(arr.length);

  var offset = -1; // Stores the index of the smallest element greater than or equal to the target
  var i = fibonacci.length - 1; // Start with the last Fibonacci number

  while (i > 0) {
    var index = Math.min(offset + fibonacci[i - 2], arr.length - 1);

    if (arr[index] < target) {
      i--; // Move two steps down in the Fibonacci sequence
      offset = index;
    } else if (arr[index] > target) {
      i -= 2; // Move two steps down and one step up in the Fibonacci sequence
    } else {
      return index; // Target found
    }
  }

  return -1; // Target not found
}
var arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
var target = 13;

var index = fibonacciSearch(arr, target);

if (index !== -1) {
  console.log("Element found at index", index);
} else {
  console.log("Element not found");
}
