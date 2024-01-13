function fibonacciSearch(arr, searchKey) {
  // Generate Fibonacci series until it exceeds the array length
  let fib = [0, 1, 1];
  while (fib[fib.length - 1] < arr.length) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  let offset = -1; // Offset from the first element
  let i;

  // Perform the searching
  while (fib.length > 2) {
    i = Math.min(offset + fib[fib.length - 3], arr.length - 1);

    if (searchKey === arr[i]) {
      return i;  // Found the element, return its index
    }
    else if (searchKey < arr[i]) {
      fib.splice(fib.length - 2);
    }
    else {
      offset = i;
      fib.splice(fib.length - 1);
    }
  }

  // Perform the last comparison
  if (fib[fib.length - 2] && arr[offset + 1] === searchKey) {
    return offset + 1;  // Found the element, return its index
  }

  return -1;  // Element not found
}
let arr = [1, 3, 5, 8, 10, 15, 21, 34, 55];
let searchKey = 10;
let index = fibonacciSearch(arr, searchKey);

if (index !== -1) {
  console.log(`Element ${searchKey} found at index ${index}.`);
} else {
  console.log(`Element ${searchKey} not found.`);
}
