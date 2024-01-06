function fibonacci(limit) {
  var fib = [0, 1];
  for (var i = 2; i < limit; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
function fibonacciSearch(arr, target) {
  var fibArray = fibonacci(arr.length);
  var offset = -1;
  
  var i = fibArray.length - 1;
  
  while (i > 1) {
    var index = Math.min(offset + fibArray[i - 2], arr.length - 1);
  
    if (arr[index] < target) {
      i--;
      offset = index;
    } else if (arr[index] > target) {
      i -= 2;
    } else {
      return index;
    }
  }
  
  if (fibArray[1] === target && arr[offset + 1] === target) {
    return offset + 1;
  }
  
  return -1;
}
var arr = [1, 3, 5, 7, 9, 11, 13];
var target = 7;

var index = fibonacciSearch(arr, target);
if (index !== -1) {
  console.log("Element", target, "found at index", index);
} else {
  console.log("Element", target, "not found in the array");
}
