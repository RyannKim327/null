function fibonacciSearch(arr, x) {
  let fib = [0, 1];
  let fibIndex = 1;

  while (fib[fibIndex] < arr.length) {
    fibIndex++;
    fib.push(fib[fibIndex - 1] + fib[fibIndex - 2]);
  }
  
  // ...
}
let offset = 0;
let prevOffset = 0;
let fibMinus2 = 0;
while (fibIndex > 1) {
  // Check if fibMinus2 is out of bounds
  const index = Math.min(offset + fibMinus2, arr.length - 1);

  if (arr[index] === x) {
    return index; // Found the element
  } else if (arr[index] < x) {
    // Go right
    fibIndex -= 1;
    fibMinus2 = fib[fibIndex - 2];
    offset = index;
  } else {
    // Go left
    fibIndex -= 2;
    const temp = offset - fib[fibIndex - 1];
    fibMinus2 = fib[fibIndex - 2];
    offset = temp;
  }
}
if (fibMinus2 && offset < arr.length && arr[offset] === x) {
  return offset;
} else {
  return -1; // Element not found
}
function fibonacciSearch(arr, x) {
  let fib = [0, 1];
  let fibIndex = 1;

  while (fib[fibIndex] < arr.length) {
    fibIndex++;
    fib.push(fib[fibIndex - 1] + fib[fibIndex - 2]);
  }

  let offset = 0;
  let prevOffset = 0;
  let fibMinus2 = 0;

  while (fibIndex > 1) {
    const index = Math.min(offset + fibMinus2, arr.length - 1);

    if (arr[index] === x) {
      return index; // Found the element
    } else if (arr[index] < x) {
      fibIndex -= 1;
      fibMinus2 = fib[fibIndex - 2];
      offset = index;
    } else {
      fibIndex -= 2;
      const temp = offset - fib[fibIndex - 1];
      fibMinus2 = fib[fibIndex - 2];
      offset = temp;
    }
  }

  if (fibMinus2 && offset < arr.length && arr[offset] === x) {
    return offset;
  } else {
    return -1; // Element not found
  }
}
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const x = 23;
const result = fibonacciSearch(arr, x);
console.log(`Element ${x} is found at index ${result}.`);
