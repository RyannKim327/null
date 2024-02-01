function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(1);
  let maxLen = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        maxLen = Math.max(maxLen, dp[i]);
      }
    }
  }

  const subsequence = [];
  for (let i = n - 1; i >= 0; i--) {
    if (dp[i] === maxLen) {
      subsequence.unshift(arr[i]); // Add elements in reverse order
      maxLen--;
    }
  }

  return subsequence;
}

// Example usage
const array = [3, 10, 2, 1, 20];
const longestSubsequence = findLongestIncreasingSubsequence(array);
console.log(longestSubsequence); // Output: [3, 10, 20]
