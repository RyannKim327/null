function findLongestIncreasingSubsequence(arr) {
    let n = arr.length;
    let dp = new Array(n).fill(1);
    let prevIndex = new Array(n).fill(-1);
    let maxLength = 1;
    let endIndex = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                prevIndex[i] = j;
            }
        }
        if (dp[i] > maxLength) {
            maxLength = dp[i];
            endIndex = i;
        }
    }

    let longestIncreasingSubsequence = [];
    let currentIndex = endIndex;
    while (currentIndex >= 0) {
        longestIncreasingSubsequence.unshift(arr[currentIndex]);
        currentIndex = prevIndex[currentIndex];
    }

    return longestIncreasingSubsequence;
}

// Example usage
let arr = [3, 10, 2, 1, 20];
console.log(findLongestIncreasingSubsequence(arr)); // Output: [3, 10, 20]
