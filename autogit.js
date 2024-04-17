// Define Fibonacci search function
function fibonacciSearch(arr, x) {
    let fibM2 = 0; // (m-2)'th Fibonacci number
    let fibM1 = 1; // (m-1)'th Fibonacci number
    let fibM = fibM2 + fibM1; // m'th Fibonacci number

    // finding the smallest Fibonacci number greater than or equal to the length of the array
    while (fibM < arr.length) {
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM2 + fibM1;
    }

    let offset = -1; // offset index from where to start comparison

    while (fibM > 1) {
        // check if fibM2 is a valid location
        let i = Math.min(offset + fibM2, arr.length - 1);

        // if x is greater than the value at index i, move the offset by fibM1 places and update the Fibonacci numbers
        if (arr[i] < x) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1;
            offset = i;
        }
        // if x is smaller than the value at index i, move the offset to the left by fibM2 places and update the Fibonacci numbers
        else if (arr[i] > x) {
            fibM = fibM2;
            fibM1 = fibM1 - fibM2;
            fibM2 = fibM - fibM1;
        }
        // if x is found at index i, return the index
        else {
            return i;
        }
    }

    // if x is not found in the array, return -1
    if (fibM1 && arr[offset + 1] == x){
        return offset + 1;
    }

    // element not found, return -1
    return -1;
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const x = 13;
const index = fibonacciSearch(arr, x);

if (index !== -1) {
    console.log(`${x} found at index ${index}`);
} else {
    console.log(`${x} not found in the array`);
}
