function fibonacciSearch(arr, x) {
    let fibMMm2 = 0; // (m-2)'th Fibonacci number
    let fibMMm1 = 1; // (m-1)'th Fibonacci number
    let fibM = fibMMm2 + fibMMm1; // m'th Fibonacci number
     
    let n = arr.length;

    while (fibM < n) {
        fibMMm2 = fibMMm1;
        fibMMm1 = fibM;
        fibM = fibMMm2 + fibMMm1;
    }

    let offset = -1;

    while (fibM > 1) {
        let i = Math.min(offset + fibMMm2, n - 1);

        if (arr[i] < x) {
            fibM = fibMMm1;
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1;
            offset = i;
        } else if (arr[i] > x) {
            fibM = fibMMm2;
            fibMMm1 -= fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        } else {
            return i;
        }
    }

    if (fibMMm1 && arr[n-1] === x) {
        return n-1;
    }

    return -1;
}

// Example usage
const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const x = 12;
const index = fibonacciSearch(array, x);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log(`Element not found in array`);
}
