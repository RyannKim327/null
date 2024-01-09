function maxSubarraySum(arr) {
    let maxSum = -Infinity; // Maximum sum initialized as negative infinity
    let currentSum = 0; // Current sum initialized as 0

    for (let i = 0; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]); // Choosing the maximum between the current element and the sum of the current element with the previous subarray
        maxSum = Math.max(maxSum, currentSum); // Choosing the maximum between the previous maximum and current sum
    }

    return maxSum;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(array)); // Output: 6 (corresponding to the subarray [4, -1, 2, 1])
