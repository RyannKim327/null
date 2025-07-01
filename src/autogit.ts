function fibonacciSearch(arr: number[], target: number): number {
    const n = arr.length;

    // Initialize Fibonacci numbers
    let fibMMinus2 = 0; // (m-2)'th Fibonacci number
    let fibMMinus1 = 1; // (m-1)'th Fibonacci number
    let fib = fibMMinus1 + fibMMinus2; // m'th Fibonacci number

    // Find the smallest Fibonacci number greater than or equal to n
    while (fib < n) {
        fibMMinus2 = fibMMinus1;
        fibMMinus1 = fib;
        fib = fibMMinus1 + fibMMinus2;
    }

    // Marks the eliminated range from the front
    let offset = -1;

    // While there are elements to be inspected
    while (fib > 1) {
        // Check if fibMMinus2 is a valid index
        let i = Math.min(offset + fibMMinus2, n - 1);

        // If target is greater than the value at index i, cut the subarray from offset to i
        if (arr[i] < target) {
            fib = fibMMinus1;
            fibMMinus1 = fibMMinus2;
            fibMMinus2 = fib - fibMMinus1;
            offset = i;
        }
        // If target is less than the value at index i, cut the subarray after i+1
        else if (arr[i] > target) {
            fib = fibMMinus2;
            fibMMinus1 -= fibMMinus2;
            fibMMinus2 = fib - fibMMinus1;
        }
        // Element found
        else {
            return i;
        }
    }

    // Compare the last element with the target
    if (fibMMinus1 === 1 && arr[offset + 1] === target) {
        return offset + 1;
    }

    // Element not found
    return -1;
}

// Example usage
const sortedArray = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const target = 85;

const result = fibonacciSearch(sortedArray, target);
if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log("Element not found");
}
const sortedArray = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const target = 85;

// Output:
Element found at index: 8
