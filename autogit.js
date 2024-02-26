function fibonacciSearch(arr, value) {
    let fib2 = 0;
    let fib1 = 1;
    let fib = fib1 + fib2;
    
    while (fib < arr.length) {
        fib2 = fib1;
        fib1 = fib;
        fib = fib1 + fib2;
    }
    
    let offset = -1;
    
    while (fib > 1) {
        let i = Math.min(offset + fib2, arr.length - 1);
        
        if (arr[i] < value) {
            fib = fib1;
            fib1 = fib2;
            fib2 = fib - fib1;
            offset = i;
        } else if (arr[i] > value) {
            fib = fib2;
            fib1 -= fib2;
            fib2 = fib - fib1;
        } else {
            return i;
        }
    }
    
    if (fib1 && arr[offset + 1] === value) {
        return offset + 1;
    }
    
    return -1;
}

// Example usage
const arr = [1, 2, 3, 5, 8, 13, 21, 34, 55];
const value = 13;
const index = fibonacciSearch(arr, value);

if (index !== -1) {
    console.log(`Found ${value} at index ${index}`);
} else {
    console.log(`${value} not found in the array`);
}
