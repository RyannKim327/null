function fibonacciSearch(arr: number[], target: number): number {
    const n = arr.length;

    // Initialize Fibonacci numbers
    let fibMMm2 = 0; // (m-2)'th Fibonacci No.
    let fibMMm1 = 1; // (m-1)'th Fibonacci No.
    let fibM = fibMMm2 + fibMMm1; // m'th Fibonacci

    // fibM is the smallest Fibonacci number greater or equal to n
    while (fibM < n) {
        fibMMm2 = fibMMm1;
        fibMMm1 = fibM;
        fibM = fibMMm2 + fibMMm1;
    }

    // Marks the eliminated range from front
    let offset = -1;

    while (fibM > 1) {
        // Check if fibMMm2 is a valid location
        const i = Math.min(offset + fibMMm2, n - 1);

        if (arr[i] < target) {
            // Move forward in array
            fibM = fibMMm1;
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1;
            offset = i;
        } else if (arr[i] > target) {
            // Move backward in array
            fibM = fibMMm2;
            fibMMm1 = fibMMm1 - fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        } else {
            // Found target, return index
            return i;
        }
    }

    // Checking if the last element is target
    if (fibMMm1 && arr[offset + 1] === target) {
        return offset + 1;
    }

    // Element not found, return -1
    return -1;
}
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const target = 85;
const index = fibonacciSearch(arr, target);

console.log(index); // Output: 8 (index of value 85)
