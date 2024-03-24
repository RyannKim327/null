function fibonacciSearch(arr, key) {
    // Initialize Fibonacci numbers
    let fibN2 = 0; // (n-2)'th Fibonacci number
    let fibN1 = 1; // (n-1)'th Fibonacci number
    let fibN = fibN2 + fibN1; // n'th Fibonacci number

    // Find the smallest Fibonacci number greater than or equal to the array length
    while (fibN < arr.length) {
        fibN2 = fibN1;
        fibN1 = fibN;
        fibN = fibN2 + fibN1;
    }

    // Initialize offset
    let offset = -1;

    // Perform the search
    while (fibN > 1) {
        // Calculate the next indices
        const next = Math.min(offset + fibN2, arr.length - 1);

        // If key is greater than the value at index next, cut the array from offset to next
        if (arr[next] < key) {
            fibN = fibN1;
            fibN1 = fibN2;
            fibN2 = fibN - fibN1;
            offset = next;
        } 
        // If key is less than the value at index next, cut the array after next + 1
        else if (arr[next] > key) {
            fibN = fibN2;
            fibN1 = fibN1 - fibN2;
            fibN2 = fibN - fibN1;
        } 
        // If key is found
        else {
            return next;
        }
    }

    // If key is not found
    return -1;
}

// Example usage
const arr = [2, 3, 5, 7, 9, 13, 21, 34, 55];
const key = 13;

const index = fibonacciSearch(arr, key);
if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log("Element not found in the array");
}
