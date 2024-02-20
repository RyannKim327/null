// Generate a Fibonacci series up to n
function generateFibonacci(n) {
    let fib = [0, 1];
    while (fib[fib.length - 1] < n) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
}

// Fibonacci search function
function fibonacciSearch(arr, key) {
    let fib = generateFibonacci(arr.length);

    let offset = 0;
    let fbIndex = fib.length - 1;

    while (fbIndex > 1) {
        let i = Math.min(offset + fib[fbIndex - 2], arr.length - 1);

        if (arr[i] < key) {
            fbIndex -= 1;
            offset = i;
        } else if (arr[i] > key) {
            fbIndex -= 2;
        } else {
            return i;
        }
    }

    if (arr[offset + 1] == key) {
        return offset + 1;
    }

    return -1;
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const key = 13;
const index = fibonacciSearch(arr, key);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found");
}
