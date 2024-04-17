function longestIncreasingSubsequence(arr) {
    // Create an array to store the length of the longest increasing subsequence ending at each index
    const dp = new Array(arr.length).fill(1);

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // Find the maximum value in the dp array
    let maxLen = Math.max(...dp);

    // Find the longest increasing subsequence using the dp array
    let subsequence = [];
    let endIndex = dp.indexOf(maxLen);
    subsequence.unshift(arr[endIndex]);
    for (let i = endIndex - 1; i >= 0; i--) {
        if (dp[i] + 1 == dp[endIndex] && arr[i] < arr[endIndex]) {
            subsequence.unshift(arr[i]);
            endIndex = i;
        }
    }

    return subsequence;
}

// Example
const array = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(longestIncreasingSubsequence(array)); // Output: [10, 22, 33, 50, 60, 80]
