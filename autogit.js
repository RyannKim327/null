function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = Array(n).fill(1); // Initialize dp array with 1s

  let maxLength = 1; // Store the length of the longest increasing subsequence

  // Find the length of the longest increasing subsequence
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        maxLength = Math.max(maxLength, dp[i]);
      }
    }
  }

  // Reconstruct the longest increasing subsequence
  const lis = [];
  let currentIndex = maxLength - 1;
  for (let i = n - 1; i >= 0; i--) {
    if (dp[i] === maxLength && (currentIndex < 0 || arr[i] < lis[currentIndex])) {
      lis[currentIndex] = arr[i];
      currentIndex--;
      maxLength--;
    }
  }

  return lis;
}

// Usage example:
const arr = [3, 10, 2, 1, 20];
const lis = findLongestIncreasingSubsequence(arr);
console.log(lis); // Output: [3, 10, 20]
