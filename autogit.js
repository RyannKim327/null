// Fibonacci search algorithm
function fibonacciSearch(arr, x) {
    let fib2 = 0;
    let fib1 = 1;
    let fib = fib1 + fib2;
    const n = arr.length;
    
    while (fib < n) {
        fib2 = fib1;
        fib1 = fib;
        fib = fib1 + fib2;
    }
    
    let offset = -1;

    while (fib > 1) {
        const i = Math.min(offset + fib2, n - 1);

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

    if (fib1 && arr[offset + 1] === x) {
        return offset + 1;
    }

    return -1;
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const elementToSearch = 11;
const index = fibonacciSearch(sortedArray, elementToSearch);

if (index !== -1) {
    console.log(`Element found at index ${index}.`);
} else {
    console.log("Element not found in the array.");
}
