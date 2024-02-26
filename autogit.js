function fibonacciSearch(arr, x) {
    let fibM2 = 0; // (m-2)'th Fibonacci number
    let fibM1 = 1; // (m-1)'th Fibonacci number
    let fibM = fibM2 + fibM1; // m'th Fibonacci number

    // Finding the smallest Fibonacci Number greater than or equal to the length of the array
    while (fibM < arr.length) {
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM2 + fibM1;
    }

    let offset = -1;

    while (fibM > 1) {
        // Check if fibM2 is a valid index
        const i = Math.min(offset + fibM2, arr.length - 1);

        // If x is greater than the value at index i, move fibM2 places ahead, else move fibM1 places ahead
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

    // If the element is not found, return -1
    if (fibM1 && arr[offset + 1] === x) {
        return offset + 1;
    }

    return -1;
}

// Test the function
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const x = 16;
const index = fibonacciSearch(arr, x);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found in the array");
}
