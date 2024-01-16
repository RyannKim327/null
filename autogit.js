function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(1); // Initialize the dp array with 1's

  // Compute the longest increasing subsequence
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  // Find the maximum value in the dp array
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    if (dp[i] > maxLength) {
      maxLength = dp[i];
    }
  }

  // Construct and return the longest increasing subsequence
  const subsequence = [];
  let currLength = maxLength;
  for (let i = n - 1; i >= 0; i--) {
    if (dp[i] === currLength) {
      subsequence.unshift(arr[i]);
      currLength--;
    }
  }

  return subsequence;
}

// Example usage:
const arr = [3, 10, 2, 1, 20];
console.log(findLongestIncreasingSubsequence(arr));
