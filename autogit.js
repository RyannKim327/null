function fibonacciSearch(arr, x) {
    let fibMMm2 = 0; // (m-2)'th Fibonacci Number
    let fibMMm1 = 1; // (m-1)'th Fibonacci Number
    let fibM = fibMMm2 + fibMMm1; // m'th Fibonacci Number

    let length = arr.length;

    while (fibM < length) {
        fibMMm2 = fibMMm1;
        fibMMm1 = fibM;
        fibM = fibMMm2 + fibMMm1;
    }

    let offset = -1;

    while (fibM > 1) {
        let i = Math.min(offset + fibMMm2, length - 1);

        if (arr[i] < x) {
            fibM = fibMMm1;
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1;
            offset = i;
        } else if (arr[i] > x) {
            fibM = fibMMm2;
            fibMMm1 = fibMMm1 - fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        } else {
            return i;
        }
    }

    if (fibMMm1 && arr[offset + 1] === x) {
        return offset + 1;
    }

    return -1;
}
let arr = [1, 3, 5, 7, 9, 11, 13, 15];
let x = 9;
let result = fibonacciSearch(arr, x);

if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log('Element not found in the array');
}
