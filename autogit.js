function findLongestIncreasingSubsequence(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let dp = new Array(arr.length).fill(1);
    let maxLength = 1;

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                maxLength = Math.max(maxLength, dp[i]);
            }
        }
    }

    return maxLength;
}

// Example usage
const array = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(findLongestIncreasingSubsequence(array)); // Output: 6
