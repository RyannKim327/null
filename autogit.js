// Function to find the smallest Fibonacci Number greater than or equal to n
function findFibonacci(m) {
    if (m <= 1) return m;
    
    let prev = 0;
    let curr = 1;
    let next = prev + curr;
    
    while (next < m) {
        prev = curr;
        curr = next;
        next = prev + curr;
    }
    
    return curr;
}

// Fibonacci search algorithm
function fibonacciSearch(arr, x) {
    let n = arr.length;
    let fibM2 = 0;    
    let fibM1 = 1;
    let fibM = fibM1 + fibM2;
    
    while (fibM < n) {
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM1 + fibM2;
    }

    let offset = -1;
    
    while (fibM > 1) {
        let i = Math.min(offset + fibM2, n-1);

        if (arr[i] < x) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1;
            offset = i;
        } else if (arr[i] > x) {
            fibM = fibM2;
            fibM1 = fibM1 - fibM2;
            fibM2 = fibM - fibM1;
        } else {
            return i;
        }
    }

    if (fibM1 && arr[n-1] == x) {
        return n-1;
    }

    return -1;
}

// Test the Fibonacci search algorithm
let arr = [2, 3, 6, 8, 10, 12, 15, 20, 25];
let x = 15;
let index = fibonacciSearch(arr, x);

if (index != -1) {
    console.log("Element found at index ", index);
} else {
    console.log("Element not found");
}
