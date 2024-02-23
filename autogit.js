function fibonacciSearch(arr, key) {
    let fibMMm2 = 0; // (m-2)'th Fibonacci No.
    let fibMMm1 = 1; // (m-1)'th Fibonacci No.
    let fibM = fibMMm2 + fibMMm1; // m'th Fibonacci

    let n = arr.length;

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
        }
        else if (arr[i] > key) {
            fibM = fibMMm2;
            fibMMm1 = fibMMm1 - fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        }
        else {
            return i;
        }
    }

    if (fibMMm1 && arr[n-1] === key) {
        return n-1;
    }

    return -1;
}

// Example usage
let arr = [2, 3, 5, 8, 13, 21, 34, 55, 89];
let key = 21;

let index = fibonacciSearch(arr, key);

console.log(index); // Output: 5
