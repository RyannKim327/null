function fibonacciSearch(arr, x) {
    let fibN2 = 0; 
    let fibN1 = 1; 
    let fibN = fibN2 + fibN1;

    while (fibN < arr.length) {
        fibN2 = fibN1;
        fibN1 = fibN;
        fibN = fibN2 + fibN1;
    }

    let offset = -1;

    while (fibN > 1) {
        let i = Math.min(offset + fibN2, arr.length - 1);
        
        if (arr[i] < x) {
            fibN = fibN1;
            fibN1 = fibN2;
            fibN2 = fibN - fibN1;
            offset = i;
        } else if (arr[i] > x) {
            fibN = fibN2;
            fibN1 = fibN1 - fibN2;
            fibN2 = fibN - fibN1;
        } else {
            return i;
        }
    }

    if (fibN1 && arr[offset + 1] === x) {
        return offset + 1;
    }

    return -1; // Element not found
}

// Example usage
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const x = 85;
const index = fibonacciSearch(arr, x);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found");
}
