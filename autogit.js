function fibonacciSearch(arr, key) {
    let fibM2 = 0; // (m-2)'th Fibonacci number
    let fibM1 = 1; // (m-1)'th Fibonacci number
    let fibM = fibM2 + fibM1; // m'th Fibonacci number

    // Find the smallest Fibonacci number greater than or equal to the length of the array
    while (fibM < arr.length) {
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM2 + fibM1;
    }

    // Offsets used to keep track of eliminated range
    let offset = -1;

    while (fibM > 1) {
        // Check if fibM2 is a valid index
        const i = Math.min(offset + fibM2, arr.length - 1);

        // If key is greater than the value at index fibM2, cut the sub array from offset to i (eliminate fibM elements)  
        if (arr[i] < key) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1;
            offset = i;
        }
        // If key is less than the value at index fibM2, cut the sub array after (i - 1) and shift fibM to right        
        else if (arr[i] > key) {
            fibM = fibM2;
            fibM1 = fibM1 - fibM2;
            fibM2 = fibM - fibM1;
        }
        // If key is found
        else {
            return i;
        }
    }

    // If key is not found in the array
    return -1;
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const key = 13;
const index = fibonacciSearch(arr, key);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log("Element not found in the array");
}
