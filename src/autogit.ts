function maxSumSubarray(arr: number[]): { maxSum: number; start: number; end: number } {
    if (arr.length === 0) {
        throw new Error("Array must not be empty");
    }

    let maxSum = arr[0]; // Initialize maxSum to the first element
    let currentSum = arr[0]; // Initialize currentSum to the first element
    let start = 0; // Start index of the maximum sum subarray
    let tempStart = 0; // Temporary start index for tracking subarrays
    let end = 0; // End index of the maximum sum subarray

    for (let i = 1; i < arr.length; i++) {
        // Decide whether to extend the current subarray or start a new one
        if (currentSum + arr[i] > arr[i]) {
            currentSum += arr[i];
        } else {
            currentSum = arr[i];
            tempStart = i; // Update the temporary start index
        }

        // Update the global maximum sum and indices if needed
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    return { maxSum, start, end };
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSumSubarray(arr);

console.log(`Maximum Sum: ${result.maxSum}`);
console.log(`Subarray Indices: [${result.start}, ${result.end}]`);
console.log(`Subarray: ${arr.slice(result.start, result.end + 1)}`);
Maximum Sum: 6
Subarray Indices: [3, 6]
Subarray: [4, -1, 2, 1]
