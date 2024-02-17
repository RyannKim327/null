// Function to calculate the nth Fibonacci number
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Fibonacci search algorithm
function fibonacciSearch(arr, x) {
    let fib2 = 0; // (m-2)'th Fibonacci number
    let fib1 = 1; // (m-1)'th Fibonacci number
    let fib = fib1 + fib2; // m'th Fibonacci number

    // Find the smallest Fibonacci number greater than or equal to the length of the array
    while (fib < arr.length) {
        fib2 = fib1;
        fib1 = fib;
        fib = fib1 + fib2;
    }

    let offset = -1; // Initialize the offset

    // Compare x with the last element of the Fibonacci series one by one
    while (fib > 1) {
        let i = Math.min(offset + fib2, arr.length - 1);

        // if x is greater than the value at index fib2, cut the subarray from offset to i
        if (arr[i] < x) {
            fib = fib1;
            fib1 = fib2;
            fib2 = fib - fib1;
            offset = i;
        }
        // if x is less than the value at index fib2, cut the subarray after i+1
        else if (arr[i] > x) {
            fib = fib2;
            fib1 = fib1 - fib2;
            fib2 = fib - fib1;
        }
        // Element found
        else {
            return i;
        }
    }

    // If element is not found, return -1
    if (fib1 && arr[offset + 1] == x) {
        return offset + 1;
    }

    return -1;
}

// Example usage
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const x = 14;
const index = fibonacciSearch(arr, x);
if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log(`Element not found`);
}
