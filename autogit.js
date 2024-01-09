function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(1);
  let maxLength = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        maxLength = Math.max(maxLength, dp[i]);
      }
    }
  }

  const result = [];
  let lastIndex = -1;
  for (let i = n - 1; i >= 0; i--) {
    if (dp[i] === maxLength && (lastIndex === -1 || arr[i] < arr[lastIndex])) {
      result.unshift(arr[i]);
      maxLength--;
      lastIndex = i;
    }
  }
  return result;
}

// Example usage
const arr = [3, 10, 2, 1, 20];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(arr);
console.log(longestIncreasingSubsequence); // Output: [3, 10, 20]
