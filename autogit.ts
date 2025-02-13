function fibonacciSearch(arr: number[], x: number): number {
    const n = arr.length;

    // Initialize Fibonacci numbers
    let fibMMm2 = 0; // (m-2)'th Fibonacci No.
    let fibMMm1 = 1; // (m-1)'th Fibonacci No.
    let fibM = fibMMm2 + fibMMm1; // m'th Fibonacci No.

    // fibM is the smallest Fibonacci number greater than or equal to n
    while (fibM < n) {
        fibMMm2 = fibMMm1;
        fibMMm1 = fibM;
        fibM = fibMMm2 + fibMMm1;
    }

    // Marks the eliminated range from front
    let offset = -1;

    // While there are elements to be inspected
    while (fibM > 1) {
        // Check if fibMMm2 is a valid location
        const i = Math.min(offset + fibMMm2, n - 1);

        // If x is greater than the value at index i
        if (arr[i] < x) {
            fibM = fibMMm1; // Move to the next Fibonacci number
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1; // Update the two Fibonacci numbers
            offset = i; // Update offset
        }
        // If x is less than the value at index i
        else if (arr[i] > x) {
            fibM = fibMMm2; // Move to the previous Fibonacci number
            fibMMm1 = fibMMm1 - fibMMm2; // Update the two Fibonacci numbers
            fibMMm2 = fibM - fibMMm1; // Update the two Fibonacci numbers
        }
        // Element found
        else return i;
    }

    // Comparing the last element with x
    if (fibMMm1 && arr[offset + 1] === x) {
        return offset + 1;
    }

    // Element not found
    return -1;
}

// Example usage:
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const x = 85;
const index = fibonacciSearch(arr, x);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log(`Element not found in the array.`);
}
