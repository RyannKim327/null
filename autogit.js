function fibonacciSearch(arr, key) {
    let n = arr.length;
    
    let fibMMm2 = 0;
    let fibMMm1 = 1;
    let fibM = fibMMm2 + fibMMm1;
    
    while (fibM < n) {
        fibMMm2 = fibMMm1;
        fibMMm1 = fibM;
        fibM = fibMMm2 + fibMMm1;
    }
    
    let offset = -1;
    
    while (fibM > 1) {
        let i = Math.min(offset + fibMMm2, n - 1);
        
        if (arr[i] < key) {
            fibM = fibMMm1;
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1;
            offset = i;
        } else if (arr[i] > key) {
            fibM = fibMMm2;
            fibMMm1 = fibMMm1 - fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        } else {
            return i;
        }
    }
    
    if (fibMMm1 === 1 && arr[offset+1] === key) {
        return offset+1;
    }
    
    return -1;
}

// Example Usage
const arr = [10, 22, 30, 44, 56, 58, 60, 70, 100];
const key = 60;
const index = fibonacciSearch(arr, key);

if (index != -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found");
}
