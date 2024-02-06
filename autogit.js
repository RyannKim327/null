function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = Array(n).fill(1); // Initialize an array of length n with all values set to 1

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  let maxLength = 0;
  let lastIndex = 0;

  for (let i = 0; i < n; i++) {
    if (dp[i] > maxLength) {
      maxLength = dp[i];
      lastIndex = i;
    }
  }

  const subsequence = [];
  let currentValue = arr[lastIndex];

  for (let i = lastIndex; i >= 0; i--) {
    if (arr[i] <= currentValue && dp[i] === maxLength) {
      subsequence.unshift(arr[i]);
      currentValue = arr[i];
      maxLength--;
    }
  }

  return subsequence;
}

// Usage example:
const arr = [3, 10, 2, 1, 20];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(arr);
console.log(longestIncreasingSubsequence); // Output: [3, 10, 20]
