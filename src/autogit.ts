function maxSumSubarray(arr: number[]): { maxSum: number; start: number; end: number } {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }

    let maxSum = arr[0]; // Holds the maximum sum found so far
    let currentSum = arr[0]; // Holds the maximum sum ending at the current index
    let start = 0; // Start index of the maximum sum subarray
    let tempStart = 0; // Temporary start index for the current subarray
    let end = 0; // End index of the maximum sum subarray

    for (let i = 1; i < arr.length; i++) {
        // Decide whether to extend the current subarray or start a new one
        if (currentSum + arr[i] > arr[i]) {
            currentSum += arr[i];
        } else {
            currentSum = arr[i];
            tempStart = i; // Update the temporary start index
        }

        // Update the maximum sum and indices if the current sum is greater
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    return { maxSum, start, end };
}

// Example usage:
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSumSubarray(arr);
console.log(`Maximum Sum: ${result.maxSum}`);
console.log(`Subarray: ${arr.slice(result.start, result.end + 1)}`);
