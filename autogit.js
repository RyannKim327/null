function fibonacciSearch(arr, x) {
    let fibM2 = 0;  // (m-2)'th Fibonacci Number
    let fibM1 = 1;  // (m-1)'th Fibonacci Number
    let fibM = fibM2 + fibM1;  // m'th Fibonacci Number

    while (fibM < arr.length) {
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM2 + fibM1;
    }

    let offset = -1;

    while (fibM > 1) {
        let i = Math.min(offset + fibM2, arr.length - 1);

        if (arr[i] < x) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1;
            offset = i;
        } else if (arr[i] > x) {
            fibM = fibM2;
            fibM1 = fibM1 - fibM2;
            fibM2 = fibM - fibM1;
        } else {
            return i;
        }
    }

    if (fibM1 && arr[offset + 1] === x) {
        return offset + 1;
    }

    return -1;
}

// Usage
const arr = [2, 3, 5, 8, 13, 21, 34, 55, 89];
const x = 21;
const index = fibonacciSearch(arr, x);
console.log(index);  // Output: 5
