function fibonacciSearch(arr: number[], target: number): number {
    const n = arr.length;

    // Initialize fibonacci numbers
    let fibMMm2 = 0;  // (m-2)'th Fibonacci No.
    let fibMMm1 = 1;  // (m-1)'th Fibonacci No.
    let fibM = fibMMm2 + fibMMm1;  // m'th Fibonacci

    // fibM is going to store the smallest Fibonacci number greater than or equal to n
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

        if (arr[i] < target) {
            // Move three fibonacci variables down by one
            fibM = fibMMm1;
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1;
            offset = i;
        } else if (arr[i] > target) {
            // Move fibonacci variables down by two
            fibM = fibMMm2;
            fibMMm1 = fibMMm1 - fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        } else {
            // Element found. Return index
            return i;
        }
    }

    // Comparing the last element with target
    if (fibMMm1 && arr[offset + 1] === target) {
        return offset + 1;
    }

    // Element not found
    return -1;
}

// Example usage:
const sortedArray = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const targetValue = 85;

const index = fibonacciSearch(sortedArray, targetValue);

console.log(index);  // Output: 8
