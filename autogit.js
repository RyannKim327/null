function fibonacciSearch(arr, key) {
    let fibMinus2 = 0;
    let fibMinus1 = 1;
    let fib = fibMinus1 + fibMinus2;

    while (fib < arr.length) {
        fibMinus2 = fibMinus1;
        fibMinus1 = fib;
        fib = fibMinus1 + fibMinus2;
    }

    let offset = -1;

    while (fib > 1) {
        let i = Math.min(offset + fibMinus2, arr.length - 1);

        if (arr[i] < key) {
            fib = fibMinus1;
            fibMinus1 = fibMinus2;
            fibMinus2 = fib - fibMinus1;
            offset = i;
        } else if (arr[i] > key) {
            fib = fibMinus2;
            fibMinus1 = fibMinus1 - fibMinus2;
            fibMinus2 = fib - fibMinus1;
        } else {
            return i;
        }
    }

    if (fibMinus1 && arr[offset + 1] === key) {
        return offset + 1;
    }

    return -1;
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const key = 13;
const index = fibonacciSearch(arr, key);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log(`Element not found`);
}
