let fib2 = 0;
let fib1 = 1;
let fib = fib2 + fib1;

while (fib < n) {
    fib2 = fib1;
    fib1 = fib;
    fib = fib2 + fib1;
}
let index = Math.min(fib1, n - 1);
while (arr[index] !== x && fib > 1) {
    if (arr[index] < x) {
        fib = fib1;
        fib1 = fib2;
        fib2 = fib - fib1;
        index += fib2;
    } else {
        fib = fib2;
        fib1 = fib1 - fib2;
        fib2 = fib - fib1;
        index -= fib2;
    }
}
if (arr[index] === x) {
    return index;
} else {
    return -1;
}
function fibonacciSearch(arr, x, n) {
    let fib2 = 0;
    let fib1 = 1;
    let fib = fib2 + fib1;

    while (fib < n) {
        fib2 = fib1;
        fib1 = fib;
        fib = fib2 + fib1;
    }

    let index = Math.min(fib1, n - 1);

    while (arr[index] !== x && fib > 1) {
        if (arr[index] < x) {
            fib = fib1;
            fib1 = fib2;
            fib2 = fib - fib1;
            index += fib2;
        } else {
            fib = fib2;
            fib1 = fib1 - fib2;
            fib2 = fib - fib1;
            index -= fib2;
        }
    }

    if (arr[index] === x) {
        return index;
    } else {
        return -1;
    }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const x = 6;
const n = arr.length;

const result = fibonacciSearch(arr, x, n);
console.log(result);  // Output: 5
