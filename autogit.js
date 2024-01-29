function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    maxLength = Math.max(maxLength, dp[i]);
  }

  const lis = [];
  let lisLength = maxLength;
  for (let i = n - 1; i >= 0 && lisLength > 0; i--) {
    if (dp[i] === lisLength) {
      lis.unshift(arr[i]);
      lisLength--;
    }
  }

  return lis;
}

// Example usage:
const array = [3, 10, 2, 1, 20];
const lis = findLongestIncreasingSubsequence(array);
console.log("Longest Increasing Subsequence:", lis); // Output: [3, 10, 20]
