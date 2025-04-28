function fibonacciSearch<T>(arr: T[], target: T): number {
    const n = arr.length;

    // Step 1: Initialize Fibonacci numbers
    let fibM2 = 0; // (m-2)'th Fibonacci number
    let fibM1 = 1; // (m-1)'th Fibonacci number
    let fibM = fibM1 + fibM2; // m'th Fibonacci number

    // fibM is going to store the smallest Fibonacci number greater than or equal to n
    while (fibM < n) {
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM1 + fibM2;
    }

    // Marks the eliminated range from the front
    let offset = -1;

    // While there are elements to be inspected.
    while (fibM > 1) {
        // Check if fibM2 is a valid location
        const i = Math.min(offset + fibM2, n - 1);

        // If target is greater than the value at index i, cut the subarray after i
        if (arr[i] < target) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1;
            offset = i; // update the offset to i
        }
        // If target is found, return index
        else if (arr[i] > target) {
            fibM = fibM2;
            fibM1 = fibM1 - fibM2;
            fibM2 = fibM - fibM1;
        }
        // Element found. Return index
        else {
            return i; // Element found
        }
    }

    // Comparing the last element with target
    if (fibM1 && offset + 1 < n && arr[offset + 1] === target) {
        return offset + 1; // Element found
    }

    // Element is not found
    return -1;
}

// Example Usage
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const target = 85;

const result = fibonacciSearch(arr, target);
if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log('Element not found in array.');
}
