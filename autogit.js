function fibonacciSearch(arr, x) {
    let fibNMinus2 = 0;
    let fibNMinus1 = 1;
    let fibN = fibNMinus1 + fibNMinus2;
    
    while (fibN < arr.length) {
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
        fibN = fibNMinus2 + fibNMinus1;
    }
    
    let offset = -1;
    
    while (fibN > 1) {
        let i = Math.min(offset + fibNMinus2, arr.length - 1);
        
        if (arr[i] < x) {
            fibN = fibNMinus1;
            fibNMinus1 = fibNMinus2;
            fibNMinus2 = fibN - fibNMinus1;
            offset = i;
        } else if (arr[i] > x) {
            fibN = fibNMinus2;
            fibNMinus1 = fibNMinus1 - fibNMinus2;
            fibNMinus2 = fibN - fibNMinus1;
        } else {
            return i;
        }
    }
    
    if (fibNMinus1 && arr[offset + 1] === x) {
        return offset + 1;
    }
    
    return -1;
}

// Usage
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const x = 14;

const index = fibonacciSearch(arr, x);

console.log(index); // Output: 6
