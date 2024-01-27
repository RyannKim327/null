function findMaxSubarraySum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        // Keep adding the current element to the current sum
        currentSum = Math.max(arr[i], currentSum + arr[i]);

        // Update the max sum if the current sum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example usage:
const array = [1, -2, 3, -4, 5, -6, 7];
const maxSum = findMaxSubarraySum(array);
console.log(maxSum);  // Output: 8
