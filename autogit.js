function fibonacciSearch(arr, x) {
    let fibM2 = 0;  // (m-2)'th Fibonacci number
    let fibM1 = 1;  // (m-1)'th Fibonacci number
    let fibM = fibM2 + fibM1;  // m'th Fibonacci number

    let len = arr.length;

    // Find the smallest Fibonacci number greater than or equal to the length of the array
    while (fibM < len) {
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM2 + fibM1;
    }

    let offset = -1;  // Represents the offset from the front

    while (fibM > 1) {
        // Check if fibM2 is a valid location
        let i = Math.min(offset + fibM2, len - 1);

        // If x is greater, move fibM2 places ahead
        if (arr[i] < x) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1;
            offset = i;
        }
        // If x is smaller, move fibM2 places ahead
        else if (arr[i] > x) {
            fibM = fibM2;
            fibM1 = fibM1 - fibM2;
            fibM2 = fibM - fibM1;
        }
        // Element found
        else {
            return i;
        }
    }

    // If the element is not found
    if (fibM1 && arr[offset + 1] === x) {
        return offset + 1;
    }

    // Element not found
    return -1;
}

// Usage
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const x = 85;
const index = fibonacciSearch(arr, x);
if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found in the array");
}
