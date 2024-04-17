function findLongestIncreasingSubsequence(arr) {
    const n = arr.length;
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
            }
        }
    }

    let maxLength = Math.max(...dp);
    let result = [];
    let maxIndex = dp.indexOf(maxLength);

    result.unshift(arr[maxIndex]);
    
    for (let i = maxIndex - 1; i >= 0; i--) {
        if (arr[i] < arr[maxIndex] && dp[i] === dp[maxIndex] - 1) {
            result.unshift(arr[i]);
            maxIndex = i;
        }
    }

    return result;
}

// Example usage
const arr = [3, 10, 2, 1, 20];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(arr);
console.log("Longest Increasing Subsequence: ", longestIncreasingSubsequence);
