function fibonacciSearch(arr, target, n) {
    let fib2 = 0;
    let fib1 = 1;
    let fibM = fib2 + fib1;
  
    // Locate the smallest Fibonacci number >= n
    while (fibM < n) {
        fib2 = fib1;
        fib1 = fibM;
        fibM = fib2 + fib1;
    }
  
    let offset = -1;
  
    // Perform the search
    while (fibM > 1) {
        // Check if fibM-2 is a valid index
        const i = Math.min(offset + fib2, n - 1);
  
        // If the element at index i is greater than the target
        if (arr[i] > target) {
            fibM = fib2;
            fib1 = fib1 - fib2;
            fib2 = fibM - fib1;
        }
 
        // If the element at index i is smaller than the target
        else if (arr[i] < target) {
            fibM = fib1;
            fib1 = fib2;
            fib2 = fibM - fib1;
            offset = i;
        }
 
        // Element found
        else return i;
    }
  
    // If the element was not found
    if (fib1 === 1 && arr[offset + 1] === target) {
        return offset + 1;
    }
  
    // Element not found
    return -1;
}
const arr = [2, 6, 13, 25, 36, 42, 55, 63, 77, 82, 95];
const target = 36;
const n = arr.length;

const index = fibonacciSearch(arr, target, n);
console.log(index); // Output: 4 (the index of target in the array)
