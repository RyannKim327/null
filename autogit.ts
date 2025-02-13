function fibonacciSearch(arr: number[], x: number): number {
    const n = arr.length;

    // Initialize Fibonacci numbers
    let fibMMm2 = 0;  // (m-2)th Fibonacci No.
    let fibMMm1 = 1;  // (m-1)th Fibonacci No.
    let fibM = fibMMm2 + fibMMm1; // mth Fibonacci No.

    // Find the smallest Fibonacci number greater than or equal to n
    while (fibM < n) {
        fibMMm2 = fibMMm1;
        fibMMm1 = fibM;
        fibM = fibMMm2 + fibMMm1;
    }

    // Marks the eliminated range from the front
    let offset = -1;

    // While there are elements to be inspected
    while (fibM > 1) {
        // Check if fibMMm2 is a valid location
        const i = Math.min(offset + fibMMm2, n - 1);

        // If x is greater than the value at index i, cut the subarray after i
        if (arr[i] < x) {
            fibM = fibMMm1;
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1;
            offset = i; // Update offset to i
        } 
        // If x is less than the value at index i, cut the subarray before i
        else if (arr[i] > x) {
            fibM = fibMMm2;
            fibMMm1 = fibMMm1 - fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        } 
        // Element found
        else {
            return i;
        }
    }

    // Compare the last element with x
    if (fibMMm1 && offset + 1 < n && arr[offset + 1] === x) {
        return offset + 1; // Element found
    }

    // Element not found
    return -1;
}

// Example usage
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90];
const x = 85;
const result = fibonacciSearch(arr, x);

if (result >= 0) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log('Element not found');
}
