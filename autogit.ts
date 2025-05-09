function fibonacci(n: number): number[] {
    const fib: number[] = [0, 1];
    let i = 2;
    while (fib[i - 1] + fib[i - 2] <= n) {
        fib[i] = fib[i - 1] + fib[i - 2];
        i++;
    }
    return fib.slice(0, i);
}

function fibonacciSearch(arr: number[], x: number): number {
    const n = arr.length;
    
    // Create the Fibonacci numbers
    const fib = fibonacci(n);
    
    let fibM = 0; // Index of the smallest Fibonacci number >= n
    let fibMMm2 = fib[0]; // (m-2)'th Fibonacci number
    let fibMMm1 = fib[1]; // (m-1)'th Fibonacci number
    
    // fibM is the smallest Fibonacci number that is greater than or equal to n
    while (fibMMm1 < n) {
        fibM++;
        fibMMm2 = fibMMm1;
        fibMMm1 = fib[fibM];
    }
    
    // Mark the eliminated range from the front
    let offset = -1;

    // While there are elements to be inspected
    while (fibM > 1) {
        // Check if the fibMMm2 is a valid index
        const i = Math.min(offset + fibMMm2, n - 1);

        // If x is greater than the value at index i, cut the subarray after i
        if (arr[i] < x) {
            fibM = fibM - 1;
            fibMMm2 = fibMMm1 - fibMMm2;
            offset = i; // Update offset to the new starting index
        }
        // If x is less than the value at index i, cut the subarray before i
        else if (arr[i] > x) {
            fibM = fibM - 2;
            fibMMm1 = fibMMm2;
            fibMMm2 = fib[fibM - 2];
        }
        // Element found
        else {
            return i;
        }
    }
    
    // Comparing the last element with x
    if (fibMMm1 && (offset + 1 < n && arr[offset + 1] === x)) {
        return offset + 1;
    }
    
    // Element not found
    return -1;
}

// Example usage:
const arr: number[] = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const x: number = 85;
const index: number = fibonacciSearch(arr, x);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log(`Element not found`);
}
