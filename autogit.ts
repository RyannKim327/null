function fibonacciSearch(arr: number[], x: number): number {
    let n = arr.length;
    
    // Initialize the Fibonacci numbers
    let fibM2 = 0; // (m-2)'th Fibonacci number
    let fibM1 = 1; // (m-1)'th Fibonacci number
    let fibM = fibM1 + fibM2; // m'th Fibonacci number

    // Find the smallest Fibonacci number greater than or equal to n
    while (fibM < n) {
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM1 + fibM2;
    }

    // Marks the eliminated range from front
    let offset = -1;

    // While there are elements to be inspected
    while (fibM > 1) {
        // Check the index that is at the current Fibonacci number
        let i = Math.min(offset + fibM2, n - 1);

        // If x is greater than the value at index i
        if (arr[i] < x) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1; // Update to the previous two Fibonacci numbers
            offset = i; // Update the offset to the new range
        } 
        // If x is less than the value at index i
        else if (arr[i] > x) {
            fibM = fibM2;
            fibM1 -= fibM1; // Update to the previous two Fibonacci numbers
            fibM2 = fibM - fibM1;
        } 
        // Element found
        else {
            return i; // Return the index of the found element
        }
    }

    // Comparing the last element with x
    if (fibM1 && arr[offset + 1] === x) {
        return offset + 1; // Return the index of the found element
    }

    // Element not found
    return -1; 
}

// Example usage:
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const x = 85;

const resultIndex = fibonacciSearch(arr, x);
if (resultIndex !== -1) {
    console.log(`Element found at index ${resultIndex}`);
} else {
    console.log(`Element not found`);
}
