function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let maxLength = 0;
  let endIndex = 0;

  for (let i = 0; i < n; i++) {
    if (dp[i] > maxLength) {
      maxLength = dp[i];
      endIndex = i;
    }
  }

  const subsequence = [];
  subsequence.push(arr[endIndex]);

  for (let i = endIndex - 1; i >= 0; i--) {
    if (arr[i] < arr[endIndex] && dp[i] === dp[endIndex] - 1) {
      subsequence.unshift(arr[i]);
      endIndex = i;
    }
  }

  return subsequence;
}

// Example usage:
const arr = [3, 10, 2, 1, 20];
const longestSubsequence = findLongestIncreasingSubsequence(arr);
console.log(longestSubsequence); // Output: [3, 10, 20]
