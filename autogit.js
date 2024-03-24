function fibonacciSearch(arr, target) {
    let n = arr.length;
    
    // Initialize Fibonacci numbers
    let fib1 = 0;
    let fib2 = 1;
    let fib = fib1 + fib2;

    // Find the smallest Fibonacci number greater than or equal to n
    while (fib < n) {
        fib1 = fib2;
        fib2 = fib;
        fib = fib1 + fib2;
    }

    // Marks the eliminated range from front
    let offset = -1;

    while (fib > 1) {
        // Check if fib2 is a valid location
        let i = Math.min(offset + fib1, n - 1);

        // If target is greater than the value at index i, cut the subarray from offset to i
        if (arr[i] < target) {
            fib = fib2;
            fib2 = fib1;
            fib1 = fib - fib2;
            offset = i;
        }

        // If target is less than the value at index i, cut the subarray after i+1
        else if (arr[i] > target) {
            fib = fib1;
            fib2 = fib2 - fib1;
            fib1 = fib - fib2;
        }

        // If target is found
        else {
            return i;
        }
    }

    // Check the last element
    if (fib2 && arr[offset + 1] === target) {
        return offset + 1;
    }

    // If target is not found
    return -1;
}

// Example usage
const arr = [1, 4, 8, 12, 16, 20, 24, 28, 32, 36];
const target = 16;
const index = fibonacciSearch(arr, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}`);
} else {
    console.log(`Target ${target} not found`);
}
