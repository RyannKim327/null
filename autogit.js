function maxSubArray(arr) {
    if (!arr.length) {
        return 0;
    }

    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(array);
console.log(result); // Output: 6 (the subarray [4, -1, 2, 1] has the maximum sum of 6)
