function fibonacciSearch(arr, key) {
    // Initialize the Fibonacci numbers
    let fibNMinus2 = 0;
    let fibNMinus1 = 1;
    let fibN = fibNMinus1 + fibNMinus2;

    // Find the smallest Fibonacci number greater than or equal to the length of the array
    while (fibN < arr.length) {
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
        fibN = fibNMinus1 + fibNMinus2;
    }

    // Initialize the offset
    let offset = -1;

    while (fibN > 1) {
        // Calculate the index of the element to compare
        const i = Math.min(offset + fibNMinus2, arr.length - 1);

        // If the key is larger, move the offset by fibNMinus1 and fibNMinus2 steps
        if (arr[i] < key) {
            fibN = fibNMinus1;
            fibNMinus1 = fibNMinus2;
            fibNMinus2 = fibN - fibNMinus1;
            offset = i;
        }
        // If the key is smaller, move the offset by fibNMinus2 steps
        else if (arr[i] > key) {
            fibN = fibNMinus2;
            fibNMinus1 = fibNMinus1 - fibNMinus2;
            fibNMinus2 = fibN - fibNMinus1;
        }
        // If the key is found
        else {
            return i;
        }
    }

    // If the key is not found
    if (arr[offset + 1] === key) {
        return offset + 1;
    } else {
        return -1;
    }
}

// Test the fibonacciSearch function
const arr = [2, 3, 5, 8, 13, 21, 34, 55, 89];
const key = 21;
const index = fibonacciSearch(arr, key);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found");
}
