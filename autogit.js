function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = new Array(n); // Create an array to store the longest increasing subsequence length up to each index
  const subsequence = new Array(n); // Create an array to store the longest increasing subsequence

  // Initialize each element in the dp and subsequence arrays to 1 and the corresponding element from the input array
  for (let i = 0; i < n; i++) {
    dp[i] = 1;
    subsequence[i] = [arr[i]];
  }

  let maxLength = 1; // Initialize the maximum length of the subsequence to 1

  // Compute the length of the longest increasing subsequence
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        subsequence[i] = [...subsequence[j], arr[i]];

        // Update the maximum length and longest subsequence if necessary
        if (maxLength < dp[i]) {
          maxLength = dp[i];
        }
      }
    }
  }

  // Find the longest increasing subsequence
  let longestSubsequence = [];
  for (let i = 0; i < n; i++) {
    if (dp[i] === maxLength) {
      longestSubsequence = subsequence[i];
    }
  }

  return longestSubsequence;
}

// Usage example:
const arr = [3, 10, 2, 1, 20]; // Example array
const longestSubsequence = findLongestIncreasingSubsequence(arr);
console.log('Longest increasing subsequence:', longestSubsequence);
