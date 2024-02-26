function fibonacciSearch(arr, x) {
    let fibM2 = 0; // (m-2)'th Fibonacci No.
    let fibM1 = 1; // (m-1)'th Fibonacci No.
    let fibM = fibM2 + fibM1; // m'th Fibonacci No.

    // finding the smallest Fibonacci Number greater than or equal to array length
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
            fibM1 -= fibM2;
            fibM2 = fibM - fibM1;
        } else {
            return i;
        }
    }

    if (fibM1 && arr[offset + 1] == x) {
        return offset + 1;
    }

    return -1;
}

// Example Usage
let arr = [2, 3, 5, 8, 11, 15, 20, 30, 40];
let x = 15;

let index = fibonacciSearch(arr, x);

if (index != -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log("Element not found");
}
