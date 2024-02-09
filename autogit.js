let fib2 = 0;
let fib1 = 1;
while (fib1 < arr.length) {
  const temp = fib1;
  fib1 = fib1 + fib2;
  fib2 = temp;
}
let offset = -1;
let index = fib2;
let mid = Math.min(offset + fib1, arr.length - 1);
while (arr[mid] !== target && fib1 > 1) {
  if (arr[mid] < target) {
    fib1 = fib2;
    fib2 = fib1 - fib2;
    offset = index;
    index = fib2;
  } else {
    fib1 = fib1 - fib2;
    fib2 = fib2 - fib1;
  }
  mid = Math.min(offset + fib1, arr.length - 1);
}
return arr[mid] === target ? mid : -1;
function fibonacciSearch(arr, target) {
    let fib2 = 0;
    let fib1 = 1;

    // Find the smallest Fibonacci number >= array length
    while (fib1 < arr.length) {
        const temp = fib1;
        fib1 = fib1 + fib2;
        fib2 = temp;
    }

    let offset = -1;
    let index = fib2;
    let mid = Math.min(offset + fib1, arr.length - 1);

    // Binary search in the specified range
    while (arr[mid] !== target && fib1 > 1) {
        if (arr[mid] < target) {
            fib1 = fib2;
            fib2 = fib1 - fib2;
            offset = index;
            index = fib2;
        } else {
            fib1 = fib1 - fib2;
            fib2 = fib2 - fib1;
        }
        mid = Math.min(offset + fib1, arr.length - 1);
    }

    return arr[mid] === target ? mid : -1;
}
const arr = [1, 5, 9, 13, 18, 24, 30];
const target = 18;

const index = fibonacciSearch(arr, target);
console.log(index);  // Output: 4 (the index where target is found)
