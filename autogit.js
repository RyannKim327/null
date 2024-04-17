function generateFibonacci(n) {
    let fib = [0, 1];
    while (fib[fib.length - 1] < n) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
}

function fibonacciSearch(arr, key) {
    const n = arr.length;
    let fib = generateFibonacci(n);
    let offset = 0;
    
    for (let i = fib.length - 1; i > 1; i--) {
        const index = Math.min(offset + fib[i - 2], n - 1);
        
        if (arr[index] < key) {
            offset = index;
        } else if (arr[index] > key) {
            // Do nothing, continue with the loop
        } else {
            return index;
        }
    }
    
    return -1; // Element not found
}

// Example usage
const arr = [1, 3, 5, 8, 13, 21, 34, 55, 89];
const key = 13;
const index = fibonacciSearch(arr, key);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log(`Element not found in the array`);
}
