function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  // Initialize an array dp with all elements set to 1
  const dp = new Array(n).fill(1);
  // Initialize an array sequence to store the subsequence
  const sequence = new Array(n);

  for (let i = 0; i < n; i++) {
    sequence[i] = [arr[i]];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        sequence[i] = sequence[j].concat(arr[i]);
      }
    }
  }

  // Find the maximum value in dp array
  let maxIndex = 0;
  for (let i = 1; i < n; i++) {
    if (dp[i] > dp[maxIndex]) {
      maxIndex = i;
    }
  }

  // Return the longest increasing subsequence
  return sequence[maxIndex];
}

// Example usage
const arr = [3, 10, 2, 1, 20];
const longestSubsequence = findLongestIncreasingSubsequence(arr);
console.log(longestSubsequence); // Output: [3, 10, 20]
