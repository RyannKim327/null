function fibonacci_search(arr, x) {
    let fib_n2 = 0;
    let fib_n1 = 1;
    let fib = fib_n2 + fib_n1;

    while (fib < arr.length) {
        fib_n2 = fib_n1;
        fib_n1 = fib;
        fib = fib_n2 + fib_n1;
    }

    let offset = -1;

    while (fib > 1) {
        let i = Math.min(offset + fib_n2, arr.length - 1);

        if (arr[i] < x) {
            fib = fib_n1;
            fib_n1 = fib_n2;
            fib_n2 = fib - fib_n1;
            offset = i;
        } else if (arr[i] > x) {
            fib = fib_n2;
            fib_n1 = fib_n1 - fib_n2;
            fib_n2 = fib - fib_n1;
        } else {
            return i;
        }
    }

    if (fib_n1 && arr[offset + 1] === x) {
        return offset + 1;
    }

    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const x = 5;
const index = fibonacci_search(arr, x);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found");
}
