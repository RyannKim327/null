function fibonacciSearch(arr, target, n) {
    // Step 2: Calculate Fibonacci numbers
    const fibArr = [0, 1];
    let fib = 1;
    while (fib < n) {
        fibArr.push(fib);
        fib = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    }

    // Step 3: Initialize variables
    let offset = -1;
    let prevOffset = -1;

    // Step 4: Perform the search
    while (offset < n - 1) {
        let i = fibArr.length - 1;

        // Find the largest Fibonacci number less than or equal to the remaining elements
        while (fibArr[i] > n - offset - 1) {
            i--;
        }

        const index = offset + fibArr[i];
        
        // Compare the value at the index with the target
        if (arr[index] === target) {
            return index;
        }

        // If the value is larger, update offset and prevOffset
        if (arr[index] < target) {
            offset = index;
            prevOffset = fibArr[i - 1];
        }

        // If the value is smaller, update offset and prevOffset
        if (arr[index] > target) {
            offset = offset - prevOffset;
            prevOffset = fibArr[i - 2];
        }
    }

    // The target was not found
    return -1;
}

// Example usage:
const arr = [2, 4, 5, 7, 9, 11, 13, 17, 19];
const target = 11;
const n = arr.length;

const result = fibonacciSearch(arr, target, n);
console.log(result); // Output: 5 (index of target value)
