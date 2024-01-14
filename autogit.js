function generateFibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
let fib = generateFibonacci(n);
let offset = -1;
while (fib[n] > 1) {
  let i = Math.min(offset + fib[n - 2], n - 1);

  if (arr[i] < target) {
    fib[n] = fib[n - 1];
    fib[n - 1] = fib[n - 2];
    fib[n - 2] = fib[n] - fib[n - 1];
    offset = i;
  } else if (arr[i] > target) {
    fib[n] = fib[n - 2];
    fib[n - 1] = fib[n - 1] - fib[n - 2];
    fib[n - 2] = fib[n] - fib[n - 1];
  } else {
    return i;
  }
}
if (fib[0] === 1 && arr[offset + 1] === target) {
  return offset + 1;
}
return -1;
function fibonacciSearch(arr, target, n) {
  function generateFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }

  let fib = generateFibonacci(n);
  let offset = -1;
  while (fib[n] > 1) {
    let i = Math.min(offset + fib[n - 2], n - 1);

    if (arr[i] < target) {
      fib[n] = fib[n - 1];
      fib[n - 1] = fib[n - 2];
      fib[n - 2] = fib[n] - fib[n - 1];
      offset = i;
    } else if (arr[i] > target) {
      fib[n] = fib[n - 2];
      fib[n - 1] = fib[n - 1] - fib[n - 2];
      fib[n - 2] = fib[n] - fib[n - 1];
    } else {
      return i;
    }
  }

  if (fib[0] === 1 && arr[offset + 1] === target) {
    return offset + 1;
  }
  return -1;
}
