function fibonacciSearch(arr: number[], target: number): number {
    const n = arr.length;

    // Initialize Fibonacci numbers
    let fibMm2 = 0; // (m-2)'th Fibonacci number
    let fibMm1 = 1; // (m-1)'th Fibonacci number
    let fibM = fibMm2 + fibMm1; // m'th Fibonacci number

    // Find the smallest Fibonacci number greater than or equal to n
    while (fibM < n) {
        fibMm2 = fibMm1;
        fibMm1 = fibM;
        fibM = fibMm2 + fibMm1;
    }

    // Marks the eliminated range from front
    let offset = -1;

    while (fibM > 1) {
        // Check if fibMm2 is a valid location
        const i = Math.min(offset + fibMm2, n - 1);

        if (arr[i] < target) {
            // Move forward the Fibonacci sequence
            fibM = fibMm1;
            fibMm1 = fibMm2;
            fibMm2 = fibM - fibMm1;
            offset = i;
        } else if (arr[i] > target) {
            // Move backward in Fibonacci sequence
            fibM = fibMm2;
            fibMm1 = fibMm1 - fibMm2;
            fibMm2 = fibM - fibMm1;
        } else {
            // Found the target
            return i;
        }
    }

    // Comparing the last element with target
    if (fibMm1 && arr[offset + 1] === target) {
        return offset + 1;
    }

    // Element not found
    return -1;
}

// Example usage:
const sortedArray = [10, 22, 35, 40, 45, 50, 60, 70, 80, 90, 100];
const target = 60;

const index = fibonacciSearch(sortedArray, target);
console.log(`Element ${target} found at index: ${index}`); // Output: Element 60 found at index: 6
