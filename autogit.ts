function fibonacciSearch(arr: number[], target: number): number {
    const n = arr.length;

    // Generate the smallest Fibonacci number >= n
    let fibMm2 = 0; // (m-2)'th Fibonacci
    let fibMm1 = 1; // (m-1)'th Fibonacci
    let fibM = fibMm2 + fibMm1; // m'th Fibonacci

    while (fibM < n) {
        fibMm2 = fibMm1;
        fibMm1 = fibM;
        fibM = fibMm2 + fibMm1;
    }

    // Marks the eliminated range from front
    let offset = -1;

    while (fibM > 1) {
        // Check if fibMm2 is a valid location
        let i = Math.min(offset + fibMm2, n - 1);

        if (arr[i] < target) {
            // Cut the subarray from offset to i
            fibM = fibMm1;
            fibMm1 = fibMm2;
            fibMm2 = fibM - fibMm1;
            offset = i;
        } else if (arr[i] > target) {
            // Cut the subarray after i+1
            fibM = fibMm2;
            fibMm1 = fibMm1 - fibMm2;
            fibMm2 = fibM - fibMm1;
        } else {
            // Element found
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
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const index = fibonacciSearch(sortedArray, 13);
console.log(index); // Output should be 6
