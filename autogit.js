function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  // Create a dynamic programming table to store the lengths of the increasing subsequences
  const dp = Array(n).fill(1);

  // Start from the second element and iterate over the array
  for (let i = 1; i < n; i++) {
    // Look for elements preceding the current element
    for (let j = 0; j < i; j++) {
      // If the current element is greater, update the length of the subsequence ending at the current element
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  // Find the maximum length in the dp array
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    if (dp[i] > maxLength) {
      maxLength = dp[i];
    }
  }

  // Reconstruct the longest increasing subsequence based on the dp array
  const subsequence = [];
  let length = maxLength;
  for (let i = n - 1; i >= 0; i--) {
    if (dp[i] === length) {
      subsequence.unshift(arr[i]);
      length--;
    }
  }

  return subsequence;
}

// Example usage
const array = [3, 10, 2, 1, 20];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(array);
console.log(longestIncreasingSubsequence);
