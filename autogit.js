function fibonacciSearch(arr, target, n) {
  let fib = [0, 1, 1];
  let k = 2;

  while (fib[k] < n) {
    k++;
    fib[k] = fib[k - 1] + fib[k - 2];
  }
}
function fibonacciSearch(arr, target, n) {
  // ...

  let offset = -1;
  let i = k - 2;
}
function fibonacciSearch(arr, target, n) {
  // ...

  let offset = -1;
  let i = k - 2;

  while (i > 0) {
    let idx = Math.min(offset + fib[i], n - 1);

    if (arr[idx] < target) {
      // If the current element is less than the target, move the Fibonacci
      // comparison index two steps down and increase the offset.
      i = i - 1;
      offset = idx;
    } else if (arr[idx] > target) {
      // If the current element is greater than the target, move the  Fibonacci
      // comparison index one step down.
      i = i - 2;
    } else {
      // If the current element is equal to the target, return the index.
      return idx;
    }
  }

  // If the target is not found, return -1.
  return -1;
}
function fibonacciSearch(arr, target, n) {
  // ...

  // ...

  // ...

  return -1;
}
function fibonacciSearch(arr, target, n) {
  let fib = [0, 1, 1];
  let k = 2;

  while (fib[k] < n) {
    k++;
    fib[k] = fib[k - 1] + fib[k - 2];
  }

  let offset = -1;
  let i = k - 2;

  while (i > 0) {
    let idx = Math.min(offset + fib[i], n - 1);

    if (arr[idx] < target) {
      i = i - 1;
      offset = idx;
    } else if (arr[idx] > target) {
      i = i - 2;
    } else {
      return idx;
    }
  }

  return -1;
}
let myArray = [1, 3, 4, 6, 7, 8, 10];
let targetValue = 6;
let arraySize = myArray.length;

let result = fibonacciSearch(myArray, targetValue, arraySize);
console.log(result); // Output: 3 (index of the target value in the array)
