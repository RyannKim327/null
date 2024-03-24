function fibonacciSearch(arr, key) {
    let fibN2 = 0;
    let fibN1 = 1;
    let fibN = fibN1 + fibN2;

    // Calculate the smallest Fibonacci number greater than or equal to the length of the array
    while (fibN < arr.length) {
        fibN2 = fibN1;
        fibN1 = fibN;
        fibN = fibN1 + fibN2;
    }

    let offset = -1;

    while (fibN > 1) {
        let i = Math.min(offset + fibN2, arr.length - 1);

        if (arr[i] < key) {
            fibN = fibN1;
            fibN1 = fibN2;
            fibN2 = fibN - fibN1;
            offset = i;
        } else if (arr[i] > key) {
            fibN = fibN2;
            fibN1 = fibN1 - fibN2;
            fibN2 = fibN - fibN1;
        } else {
            return i;
        }
    }

    if (fibN1 && arr[offset + 1] == key) {
        return offset + 1;
    }

    return -1;
}

// Example usage
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const key = 12;
const index = fibonacciSearch(arr, key);

if (index != -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log("Element not found in the array");
}
