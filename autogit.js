function fibonacciSearch(arr, key) {
    let fibM2 = 0;
    let fibM1 = 1;
    let fib = fibM2 + fibM1;

    while (fib < arr.length) {
        fibM2 = fibM1;
        fibM1 = fib;
        fib = fibM2 + fibM1;
    }

    let offset = -1;

    while (fib > 1) {
        let i = Math.min(offset + fibM2, arr.length - 1);

        if (arr[i] < key) {
            fib = fibM1;
            fibM1 = fibM2;
            fibM2 = fib - fibM1;
            offset = i;
        } else if (arr[i] > key) {
            fib = fibM2;
            fibM1 = fibM1 - fibM2;
            fibM2 = fib - fibM1;
        } else {
            return i;
        }
    }

    if (fibM1 && arr[offset + 1] === key) {
        return offset + 1;
    }

    return -1;
}

// Usage
const arr = [2, 3, 4, 10, 40];
const key = 10;
const index = fibonacciSearch(arr, key);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found");
}
