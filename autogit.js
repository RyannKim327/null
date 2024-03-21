function fibonacciSearch(arr, key) {
    let fibMMm2 = 0; // (m-2)'th Fibonacci number
    let fibMMm1 = 1; // (m-1)'th Fibonacci number
    let fibM = fibMMm2 + fibMMm1; // m'th Fibonacci number
  
    // Find the smallest Fibonacci Number greater than or equal to the length of the array
    while (fibM < arr.length) {
        fibMMm2 = fibMMm1;
        fibMMm1 = fibM;
        fibM = fibMMm2 + fibMMm1;
    }
  
    let offset = -1;
  
    while (fibM > 1) {
        const i = Math.min(offset + fibMMm2, arr.length - 1);
  
        if (arr[i] < key) {
            fibM = fibMMm1;
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1;
            offset = i;
        } else if (arr[i] > key) {
            fibM = fibMMm2;
            fibMMm1 -= fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        } else {
            return i;
        }
    }
  
    if (fibMMm1 && arr[offset + 1] === key) {
        return offset + 1;
    }
  
    return -1;
}

// Example usage
const arr = [10, 22, 30, 40, 50, 60, 70, 80, 90, 100];
const key = 60;
const index = fibonacciSearch(arr, key);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found");
}
