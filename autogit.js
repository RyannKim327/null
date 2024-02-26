function fibonacciSearch(arr, key) {
    let fibM2 = 0; // (m-2)'th Fibonacci number
    let fibM1 = 1; // (m-1)'th Fibonacci number
    let fibM = fibM2 + fibM1; // m'th Fibonacci number

    // Find the smallest Fibonacci Number greater than or equal to the length of the array
    while (fibM < arr.length) {
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM2 + fibM1;
    }

    let offset = -1;

    // while there are elements to be inspected
    while (fibM > 1) {
        // check if fibM2 is a valid location
        const i = Math.min(offset + fibM2, arr.length - 1);

        // if key is greater than the value at index fibM2, cut the subarray from offset to i
        if (arr[i] < key) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1;
            offset = i;
        }

        // if key is less than the value at index fibM2, cut the subarray after i + 1
        else if (arr[i] > key) {
            fibM = fibM2;
            fibM1 -= fibM2;
            fibM2 = fibM - fibM1;
        }

        // key found
        else {
            return i;
        }
    }

    // compare the last element with key
    if (fibM1 && arr[offset + 1] === key) {
        return offset + 1;
    }

    // if not found return -1
    return -1;
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const key = 7;
const index = fibonacciSearch(arr, key);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log(`Element not found`);
}
