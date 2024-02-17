function fibonacciSearch(arr, target) {
    let fibM2 = 0;
    let fibM1 = 1;
    let fibM = fibM2 + fibM1;

    while (fibM < arr.length) {
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM2 + fibM1;
    }

    let offset = -1;

    while (fibM > 1) {
        const i = Math.min(offset + fibM2, arr.length - 1);

        if (arr[i] === target) {
            return i;
        } else if (arr[i] < target) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1;
            offset = i;
        } else {
            fibM = fibM2;
            fibM1 = fibM1 - fibM2;
            fibM2 = fibM - fibM1;
        }
    }

    if (fibM1 && arr[offset + 1] === target) {
        return offset + 1;
    }

    return -1;
}

// Usage
const arr = [1, 4, 7, 9, 12, 15, 18];
const target = 12;
const index = fibonacciSearch(arr, target);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log(`Element not found in the array.`);
}
