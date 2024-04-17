function fibonacciSearch(arr, x) {
    let fib1 = 0;
    let fib2 = 1;
    let fibM = fib1 + fib2;

    let length = arr.length;

    while (fibM < length) {
        fib1 = fib2;
        fib2 = fibM;
        fibM = fib1 + fib2;
    }

    let offset = -1;

    while (fibM > 1) {
        let i = Math.min(offset + fib1, length - 1);
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

// Test the function
let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let x = 14;
let index = fibonacciSearch(arr, x);

console.log(index);
