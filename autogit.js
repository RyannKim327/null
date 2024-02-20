function fibonacciSearch(arr, x) {
    let fib1 = 0;
    let fib2 = 1;
    let fibM = fib1 + fib2;
    
    let n = arr.length;
    
    while (fibM < n) {
        fib2 = fib1;
        fib1 = fibM;
        fibM = fib1 + fib2;
    }
    
    let offset = -1;
    
    while (fibM > 1) {
        let i = Math.min(offset + fib2, n - 1);
        
        if (arr[i] < x) {
            fibM = fib1;
            fib1 = fib2;
            fib2 = fibM - fib1;
            offset = i;
        } else if (arr[i] > x) {
            fibM = fib2;
            fib1 = fib1 - fib2;
            fib2 = fibM - fib1;
        } else {
            return i;
        }
    }
    
    if (fib1 && arr[offset + 1] == x) {
        return offset + 1;
    }
    
    return -1;
}

// Example Usage
let arr = [2, 4, 6, 8, 10, 12, 14, 16];
let x = 10;

let index = fibonacciSearch(arr, x);

if (index != -1) {
    console.log(`${x} found at index ${index}`);
} else {
    console.log(`${x} not found in the array`);
}
