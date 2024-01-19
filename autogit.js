function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = Array(n).fill(1);
  let maxLength = 1;
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        maxLength = Math.max(maxLength, dp[i]);
      }
    }
  }
  
  const lis = [];
  let currentLength = maxLength;
  for (let i = n - 1; i >= 0; i--) {
    if (dp[i] === currentLength) {
      lis.unshift(arr[i]);
      currentLength--;
    }
  }
  
  return lis;
}

// Example usage
const arr = [3, 10, 2, 1, 20];
const lis = findLongestIncreasingSubsequence(arr);
console.log("Longest Increasing Subsequence:", lis); // [3, 10, 20]
