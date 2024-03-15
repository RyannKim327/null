function fibonacciSearch(arr, x) {
    let fib2 = 0;
    let fib1 = 1;
    let fib = fib1 + fib2;
    let n = arr.length;

    while (fib < n) {
        fib2 = fib1;
        fib1 = fib;
        fib = fib1 + fib2;
    }

    let offset = -1;

    while (fib > 1) {
        let i = Math.min(offset + fib2, n - 1);

        if (arr[i] < x) {
            fib = fib1;
            fib1 = fib2;
            fib2 = fib - fib1;
            offset = i;
        } else if (arr[i] > x) {
            fib = fib2;
            fib1 -= fib2;
            fib2 = fib - fib1;
        } else {
            return i;
        }
    }

    if (fib1 === 1 && arr[offset + 1] === x) {
        return offset + 1;
    }

    return -1;
}

// Test the Fibonacci search algorithm
const arr = [2, 3, 5, 8, 13, 21, 34, 55, 89];
const x = 55;
const index = fibonacciSearch(arr, x);

if (index !== -1) {
    console.log(`${x} found at index ${index}`);
} else {
    console.log(`${x} not found in the array`);
}
