function fibonacciSearch<T>(arr: T[], x: T): number {
    // Initialize Fibonacci numbers
    let fibM2 = 0;  // (m-2)'th Fibonacci No.
    let fibM1 = 1;  // (m-1)'th Fibonacci No.
    let fibM = fibM2 + fibM1; // m'th Fibonacci

    const n = arr.length;

    // Find the smallest Fibonacci number greater than or equal to n
    while (fibM < n) {
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM2 + fibM1;
    }

    let offset = -1;

    // While there are elements to be searched
    while (fibM > 1) {
        // Check if fibM2 is a valid location
        const i = Math.min(offset + fibM2, n - 1);

        // If x is greater than the value at index i, cut the subarray after i
        if (arr[i] < x) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1;
            offset = i;
        }
        // If x is smaller than the value at index i, cut the subarray before i
        else if (arr[i] > x) {
            fibM = fibM2;
            fibM2 = fibM1 - fibM2;
            fibM1 = fibM - fibM2;
        }
        // Element found
        else {
            return i;
        }
    }

    // Comparing the last element with x
    if (fibM1 && offset + 1 < n && arr[offset + 1] === x) {
        return offset + 1;
    }

    // Element not found
    return -1;
}

// Example usage
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const x = 85;

const result = fibonacciSearch(arr, x);
if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log('Element not found');
}
