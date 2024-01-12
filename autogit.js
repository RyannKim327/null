function longestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = Array(n).fill(1);
  let maxLength = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        maxLength = Math.max(maxLength, dp[i]);
      }
    }
  }

  const result = [];
  let currLength = maxLength;

  for (let i = n - 1; i >= 0; i--) {
    if (dp[i] === currLength) {
      result.unshift(arr[i]);
      currLength--;
    }
  }

  return result;
}

// Example usage
const array = [3, 10, 2, 1, 20];
console.log(longestIncreasingSubsequence(array)); // Output: [3, 10, 20]
