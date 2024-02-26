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
    
    let offset = -1;
    
    while (fibM > 1) {
        // Check if fibM2 is a valid index
        const i = Math.min(offset + fibM2, arr.length - 1);
        
        if (arr[i] < key) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1;
            offset = i;
        } else if (arr[i] > key) {
            fibM = fibM2;
            fibM1 = fibM1 - fibM2;
            fibM2 = fibM - fibM1;
        } else {
            return i;
        }
    }
    
    // If the element is not found, return -1
    return -1;
}

// Test the fibonacciSearch function
const arr = [2, 3, 5, 8, 13, 21, 34, 55, 89];
const key = 55;
const index = fibonacciSearch(arr, key);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log("Element not found in the array.");
}
