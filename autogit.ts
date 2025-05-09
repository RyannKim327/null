function fibonacciSearch(arr: number[], target: number): number {
    const n = arr.length;

    // Initialize fibonacci numbers
    let fibMMm2 = 0; // (m-2)'th Fibonacci number
    let fibMMm1 = 1; // (m-1)'th Fibonacci number
    let fibM = fibMMm2 + fibMMm1; // m'th Fibonacci number

    // fibM is going to store the smallest Fibonacci number greater than or equal to n
    while (fibM < n) {
        fibMMm2 = fibMMm1;
        fibMMm1 = fibM;
        fibM = fibMMm2 + fibMMm1;
    }

    // Marks the eliminated range from front
    let offset = -1;

    /* while there are elements to be inspected. Note that
       we compare arr[min(offset+fibMMm2, n-1)] with target.
       When fibM becomes 1, fibMMm1 becomes 1 and fibMMm2 becomes 0 */
    while (fibM > 1) {
        // Check if fibMMm2 is a valid location
        const i = Math.min(offset + fibMMm2, n - 1);

        if (arr[i] < target) {
            // Move fibonacci numbers down two steps
            fibM = fibMMm1;
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1;
            offset = i;
        } else if (arr[i] > target) {
            // Move fibonacci numbers down one step
            fibM = fibMMm2;
            fibMMm1 = fibMMm1 - fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        } else {
            // Element found. Return index
            return i;
        }
    }

    // comparing the last element with target
    if (fibMMm1 && arr[offset + 1] === target) {
        return offset + 1;
    }

    // element not found. return -1
    return -1;
}

// Example usage:
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const target = 85;
const index = fibonacciSearch(arr, target);
console.log(index); // Outputs: 8
