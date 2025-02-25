function fibonacciSearch(arr: number[], target: number): number {
    const n = arr.length;
    
    // Initialize Fibonacci numbers
    let fibM2 = 0; // (m-2)'th Fibonacci number
    let fibM1 = 1; // (m-1)'th Fibonacci number
    let fibM = fibM1 + fibM2; // m'th Fibonacci number

    // Find the smallest Fibonacci number greater than or equal to n
    while (fibM < n) {
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM1 + fibM2;
    }

    // Marks the eliminated range from the front
    let offset = -1;

    while (fibM > 1) {
        // Calculate index to compare with target
        const i = Math.min(offset + fibM2, n - 1);
        
        // If target is greater than the value at index i
        if (arr[i] < target) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1;
            offset = i; // mark the eliminated range
        }
        // If target is less than the value at index i
        else if (arr[i] > target) {
            fibM = fibM2;
            fibM1 = fibM1 - fibM2;
            fibM2 = fibM - fibM1;
        }
        // Target found
        else {
            return i;
        }
    }

    // Comparing the last element with target
    if (fibM1 && arr[offset + 1] === target) {
        return offset + 1;
    }

    // Target not found
    return -1;
}

// Example usage
const sortedArray = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const target = 85;
const index = fibonacciSearch(sortedArray, target);

console.log(`Index of ${target} is ${index}`);
