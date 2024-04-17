function fibonacciSearch(arr, key) {
    let fibNum2 = 0;
    let fibNum1 = 1;
    let fibNum = fibNum1 + fibNum2;

    while (fibNum < arr.length) {
        fibNum2 = fibNum1;
        fibNum1 = fibNum;
        fibNum = fibNum1 + fibNum2;
    }

    let offset = -1;

    while (fibNum > 1) {
        let i = Math.min(offset + fibNum2, arr.length - 1);

        if (arr[i] < key) {
            fibNum = fibNum1;
            fibNum1 = fibNum2;
            fibNum2 = fibNum - fibNum1;
            offset = i;
        } else if (arr[i] > key) {
            fibNum = fibNum2;
            fibNum1 = fibNum1 - fibNum2;
            fibNum2 = fibNum - fibNum1;
        } else {
            return i;
        }
    }

    if (fibNum1 && arr[offset + 1] == key) {
        return offset + 1;
    }

    return -1;
}

// Example usage
const arr = [2, 3, 5, 8, 13, 21, 34, 55, 89];
const key = 21;
const index = fibonacciSearch(arr, key);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log(`Element not found`);
}
