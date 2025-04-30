function maxSumSubarray(arr: number[]): number {
    if (arr.length === 0) {
        return 0; // Handle the case when the array is empty
    }

    let currentMax = arr[0];
    let overallMax = arr[0];

    for (let i = 1; i < arr.length; i++) {
        // Update the current maximum sum
        currentMax = Math.max(arr[i], currentMax + arr[i]);

        // Update the overall maximum sum
        overallMax = Math.max(overallMax, currentMax);
    }

    return overallMax;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = maxSumSubarray(array);
console.log(`Maximum sum of subarray: ${maxSum}`); // Output: 6
