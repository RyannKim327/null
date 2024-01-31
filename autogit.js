function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(1); // dp[i] represents the length of the longest increasing subsequence ending at index i

  // Compute the lengths of the longest increasing subsequences
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  // Find the maximum length in the dp array
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    maxLength = Math.max(maxLength, dp[i]);
  }

  // Construct the longest increasing subsequence
  const subsequence = [];
  let currentLength = maxLength;
  for (let i = n - 1; i >= 0; i--) {
    if (dp[i] === currentLength) {
      subsequence.unshift(arr[i]);
      currentLength--;
    }
  }

  return subsequence;
}

// Test the function
const arr = [3, 4, -1, 0, 6, 2, 3];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(arr);
console.log(longestIncreasingSubsequence); // Output: [-1, 0, 2, 3]
