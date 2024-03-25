function fibonacciSearch(arr, x) {
    let fib1 = 0;
    let fib2 = 1;
    let fib3 = fib1 + fib2;

    let n = arr.length;

    while (fib3 < n) {
        fib1 = fib2;
        fib2 = fib3;
        fib3 = fib1 + fib2;
    }

    let offset = -1;

    while (fib3 > 1) {
        let i = Math.min(offset + fib1, n - 1);

        if (arr[i] < x) {
            fib3 = fib2;
            fib2 = fib1;
            fib1 = fib3 - fib2;
            offset = i;
        } else if (arr[i] > x) {
            fib3 = fib1;
            fib2 = fib2 - fib1;
            fib1 = fib3 - fib2;
        } else {
            return i;
        }
    }

    if (fib2 && arr[offset + 1] == x) {
        return offset + 1;
    }

    return -1;
}

let arr = [1, 4, 8, 12, 20, 30, 40, 50];
let x = 12;

let result = fibonacciSearch(arr, x);

if (result == -1) {
    console.log("Element not found");
} else {
    console.log("Element found at index: " + result);
}
