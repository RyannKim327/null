function maxSubArraySum(arr: number[]): number {
    // Edge case: If the array is empty, return 0 or handle as required
    if (arr.length === 0) {
        throw new Error("The input array must contain at least one element.");
    }

    let currentSum = arr[0]; // Initialize with the first element
    let maxSum = arr[0];     // Initialize with the first element

    for (let i = 1; i < arr.length; i++) {
        // Update currentSum to include the current element or start fresh from the current element
        currentSum = Math.max(arr[i], currentSum + arr[i]);

        // Update maxSum if the currentSum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Maximum sum of a subarray:", maxSubArraySum(array)); // Output: 6
