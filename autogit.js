function fibonacciSearch(arr, target) {
  let fib1 = 0;
  let fib2 = 1;
  let fibM = fib1 + fib2;

  while (fibM < arr.length) {
    fib1 = fib2;
    fib2 = fibM;
    fibM = fib1 + fib2;
  }

  let offset = 0;
  let index = Math.min(offset + fib1, arr.length - 1);

  while (arr[index] !== target && fib1 > 1) {
    if (target < arr[index]) {
      fib2 = fib1;
      fib1 = fibM - fib2;
      fibM = fib2 - fib1;
    } else {
      fib1 = fib1 - fib2;
      fib2 = fibM - fib1;
      offset = index;
      fibM = fib1 + fib2;
    }

    index = Math.min(offset + fib1, arr.length - 1);
  }

  if (arr[index] === target) {
    return index;
  } else {
    return -1;
  }
}
