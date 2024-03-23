function fibonacciSearch(arr, key) {
    let fibM2 = 0;
    let fibM1 = 1;
    let fibM = fibM2 + fibM1;

    let len = arr.length;

    while (fibM < len) {
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM2 + fibM1;
    }

    let offset = -1;

    while (fibM > 1) {
        let i = Math.min(offset + fibM2, len - 1);

        if (arr[i] < key) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1;
            offset = i;
        } else if (arr[i] > key) {
            fibM = fibM2;
            fibM1 = fibM1 - fibM2;
            fibM2 = fibM - fibM1;
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
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const key = 6;
const index = fibonacciSearch(arr, key);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log(`Element not found`);
}
