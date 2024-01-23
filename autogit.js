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
  let lis = [];

  for (let i = n - 1; i >= 0 && maxLength > 0; i--) {
    if (dp[i] === maxLength) {
      lis.unshift(arr[i]);
      maxLength--;
    }
  }

  return lis;
}

// Example usage:
const arr = [3, 10, 2, 1, 20];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(arr);
console.log(longestIncreasingSubsequence); // Output: [3, 10, 20]
