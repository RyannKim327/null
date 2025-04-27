function fibonacciSearch(arr: number[], x: number): number {
    const n = arr.length;
    
    // Fibonacci numbers
    let fibM2 = 0; // (m-2)'th Fibonacci No.
    let fibM1 = 1; // (m-1)'th Fibonacci No.
    let fibM = fibM2 + fibM1; // m'th Fibonacci

    // fibM is the smallest Fibonacci number greater than or equal to n
    while (fibM < n) {
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM2 + fibM1;
    }

    // Marks the eliminated range from front
    let offset = -1;

    // While there are elements to be inspected.
    while (fibM > 1) {
        // Check if fibM2 is a valid location
        const i = Math.min(offset + fibM2, n - 1);

        // If x is greater than the value at index i, cut the subarray after i
        if (arr[i] < x) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1;
            offset = i; // Update offset
        } 
        // If x is less than the value at index i, cut the subarray before i
        else if (arr[i] > x) {
            fibM = fibM2;
            fibM1 = fibM1 - fibM2;
            fibM2 = fibM - fibM1;
        } 
        // element found. return index
        else {
            return i;
        }
    }

    // Comparing the last element with x
    if (fibM1 && arr[offset + 1] === x) {
        return offset + 1;
    }

    // Element not found.
    return -1;
}

// Example Usage:
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const x = 85;
const index = fibonacciSearch(arr, x);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log("Element not found");
}
