function fibonacciSearch(arr: number[], x: number): number {
    const n = arr.length;
    let fibM2 = 0; // (m-2)'th Fibonacci number
    let fibM1 = 1; // (m-1)'th Fibonacci number
    let fibM = fibM1 + fibM2; // m'th Fibonacci number

    // Find the smallest Fibonacci number greater than or equal to n
    while (fibM < n) {
        fibM2 = fibM1; // Update (m-2)'th Fibonacci
        fibM1 = fibM;  // Update (m-1)'th Fibonacci
        fibM = fibM1 + fibM2; // Update m'th Fibonacci
    }

    let offset = -1; // Marks the eliminated range from front

    // While there are elements to be inspected
    while (fibM > 1) {
        // Calculate the index to compare
        const i = Math.min(offset + fibM2, n - 1);

        // If x is greater than the value at index i
        if (arr[i] < x) {
            // Move the three Fibonacci indexes back
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1;
            offset = i; // Update the offset
        } else if (arr[i] > x) {
            // Move the three Fibonacci indexes back
            fibM = fibM2;
            fibM1 = fibM1 - fibM2;
            fibM2 = fibM - fibM1;
        } else {
            return i; // Found the element at index i
        }
    }

    // Compare the last element
    if (fibM1 && arr[offset + 1] === x) {
        return offset + 1; // Found element at index offset + 1
    }

    return -1; // Element not found
}

// Example Usage
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const x = 85;

const index = fibonacciSearch(arr, x);
if (index >= 0) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log('Element not found in array');
}
