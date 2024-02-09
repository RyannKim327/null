function generateFibonacci(n) {
  var fib = [0, 1];
  
  for (var i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  
  return fib;
}
function fibonacciSearch(arr, x, n) {
  var fib = generateFibonacci(n);
  
  var fib2 = fib.length - 1;
  var fib1 = fib2 - 1;
  
  var offset = -1;
  
  while (fib2 > 1) {
    var i = Math.min(offset + fib1, n - 1);
  
    if (arr[i] < x) {
      fib2 = fib1;
      fib1 = fib[fib2 - 1];
      offset = i;
    } else if (arr[i] > x) {
      fib2 = fib2 - fib1;
      fib1 = fib1 - fib2;
    } else {
      return i;
    }
  }
  
  if (fib1 && arr[offset + 1] === x) {
    return offset + 1;
  }
  
  return -1; // Element not found
}
var arr = [1, 3, 5, 7, 9, 11, 13, 15];
var size = arr.length;
var value = 9;

var index = fibonacciSearch(arr, value, size);
console.log("Element", value, "found at index", index); // Output: Element 9 found at index 4
