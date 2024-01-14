function fibonacciSearch(arr, searchValue) {
  var fib = [0, 1, 1, 2, 3, 5, 8, 13, 21]; // Fixed-size Fibonacci sequence
  
  // Step 3: Find the smallest Fibonacci number greater than or equal to the array length
  var offset = -1;
  var fibIndex = 0;
  while (fib[fibIndex] < arr.length) {
    fibIndex++;
  }

  // Step 4: Perform a comparison-based search
  var currentIndex = fib[fibIndex - 2];
  var prevIndex = 0;
  var nextIndex = 0;
  
  while (currentIndex > 0) {
    // Check if the current index is within the array
    if (nextIndex >= arr.length) {
      currentIndex = prevIndex;
      prevIndex = 0;
      nextIndex = 0;
    }
    
    // Compare the search value with the current element at currentIndex
    if (arr[currentIndex] === searchValue) {
      return currentIndex;
    } else if (arr[currentIndex] < searchValue) {
      // If search value is greater, move two Fibonacci steps down
      currentIndex += prevIndex;
      prevIndex = currentIndex - prevIndex;
      nextIndex = currentIndex + prevIndex;
    } else {
      // If search value is smaller, move one Fibonacci step down
      currentIndex -= nextIndex - prevIndex;
      nextIndex = prevIndex;
      prevIndex -= nextIndex - prevIndex;
    }
  }
  
  // Step 5: Element not found
  return -1;
}
var arr = [1, 4, 7, 15, 23, 34, 42, 55, 67, 78];
var searchValue = 23;
var resultIndex = fibonacciSearch(arr, searchValue);
console.log("Element found at index:", resultIndex);
Element found at index: 4
