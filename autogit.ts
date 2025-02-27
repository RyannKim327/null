function fibonacciSearch(arr: number[], x: number): number {
    let n = arr.length;
    let fibM2 = 0;  // (m-2)'th Fibonacci number
    let fibM1 = 1;  // (m-1)'th Fibonacci number
    let fibM = fibM1 + fibM2;  // m'th Fibonacci number

    // Find the smallest Fibonacci number greater than or equal to n
    while (fibM < n) {
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM1 + fibM2;
    }

    let offset = -1;

    // While there are elements to be inspected
    while (fibM > 1) {
        // Check the index that is fibM2 elements away from offset
        let i = Math.min(offset + fibM2, n - 1);

        // If x is greater than the value at index i, cut the subarray after i
        if (arr[i] < x) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1;
            offset = i;
        }
        // If x is less than the value at index i, cut the subarray before i
        else if (arr[i] > x) {
            fibM = fibM2;
            fibM1 = fibM1 - fibM2;
            fibM2 = fibM - fibM1;
        }
        // Element found, return index
        else {
            return i;
        }
    }

    // Compare the last element with x
    if (fibM1 && offset + 1 < n && arr[offset + 1] === x) {
        return offset + 1;
    }

    // Element not found, return -1
    return -1;
}

// Example usage:
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const x = 85;
const result = fibonacciSearch(arr, x);
console.log(`Element found at index: ${result}`);
