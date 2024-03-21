function FibonacciSearch(arr, x) {
    let fib1 = 0;
    let fib2 = 1;
    let fibM = fib1 + fib2;

    let n = arr.length;

    while (fibM < n) {
        fib1 = fib2;
        fib2 = fibM;
        fibM = fib1 + fib2;
    }

    let offset = -1;

    while (fibM > 1) {
        let i = Math.min(offset + fib1, n - 1);

        if (arr[i] < x) {
            fibM = fib2;
            fib2 = fib1;
            fib1 = fibM - fib2;
            offset = i;
        } else if (arr[i] > x) {
            fibM = fib1;
            fib2 -= fib1;
            fib1 = fibM - fib2;
        } else {
            return i;
        }
    }

    if (fib2 && arr[offset + 1] == x) {
        return offset + 1;
    }

    return -1;
}

// Usage
let arr = [2, 3, 4, 10, 40];
let x = 10;
let result = FibonacciSearch(arr, x);

if (result != -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log("Element not found");
}
