function fibonacciSearch(arr: number[], x: number): number {
    const n = arr.length;

    // Create an array to store the first few Fibonacci numbers
    const fib: number[] = [0, 1];
    let fibM2 = fib[0]; // (m-2)'th Fibonacci number
    let fibM1 = fib[1]; // (m-1)'th Fibonacci number
    let fibM = fibM1 + fibM2; // m'th Fibonacci number

    // Generate Fibonacci numbers until we find one greater than or equal to n
    while (fibM < n) {
        fib.push(fibM);
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM1 + fibM2;
    }

    let offset = -1;

    // While there are elements to be inspected
    while (fibM > 1) {
        const i = Math.min(offset + fibM2, n - 1);

        // If x is greater than the value at index i, cut the subarray after i
        if (arr[i] < x) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fib[fib.length - fibM1]; // Shift Fibonacci numbers
            offset = i; // Update the offset
        }
        // If x is less than the value at index i, cut the subarray before i
        else if (arr[i] > x) {
            fibM = fibM2;
            fibM1 = fibM1 - fibM2; // Update to (m-2)'th Fibonacci number
            fibM2 = fib[fib.length - fibM]; // Update to (m-3)'th Fibonacci number
        }
        // element found
        else return i;
    }

    // comparing the last element with x
    if (fibM1 && arr[offset + 1] === x) return offset + 1;

    // element not found
    return -1;
}

// Sample usage
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const x = 85;

const index = fibonacciSearch(arr, x);
if (index >= 0) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log("Element not found in the array.");
}
