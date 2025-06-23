function fibonacciSearch(arr: number[], target: number): number {
    const n = arr.length;

    // Step 1: Generate Fibonacci numbers until fibM >= n
    let fibM_minus_2 = 0; // (m-2)'th Fibonacci number
    let fibM_minus_1 = 1; // (m-1)'th Fibonacci number
    let fibM = fibM_minus_1 + fibM_minus_2; // m'th Fibonacci number

    while (fibM < n) {
        fibM_minus_2 = fibM_minus_1;
        fibM_minus_1 = fibM;
        fibM = fibM_minus_1 + fibM_minus_2;
    }

    // Step 2: Initialize variables for the search
    let offset = -1; // Offset to mark the eliminated range from the front

    // Step 3: Perform the search
    while (fibM > 1) {
        // Check if fibM_minus_2 is a valid index
        let i = Math.min(offset + fibM_minus_2, n - 1);

        // Compare target with the value at index i
        if (arr[i] < target) {
            // Move the offset to index i and reduce the range
            fibM = fibM_minus_1;
            fibM_minus_1 = fibM_minus_2;
            fibM_minus_2 = fibM - fibM_minus_1;
            offset = i;
        } else if (arr[i] > target) {
            // Reduce the range without changing the offset
            fibM = fibM_minus_2;
            fibM_minus_1 = fibM_minus_1 - fibM_minus_2;
            fibM_minus_2 = fibM - fibM_minus_1;
        } else {
            // Target found at index i
            return i;
        }
    }

    // Step 4: Check the last remaining element
    if (fibM_minus_1 === 1 && arr[offset + 1] === target) {
        return offset + 1;
    }

    // Step 5: Target not found
    return -1;
}

// Example usage:
const sortedArray = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const targetValue = 85;

const result = fibonacciSearch(sortedArray, targetValue);
console.log(`Index of ${targetValue}:`, result); // Output: Index of 85: 8
