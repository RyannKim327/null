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

  const lis = [];
  let length = maxLength;
  for (let i = n - 1; i >= 0; i--) {
    if (dp[i] === length) {
      lis.unshift(arr[i]);
      length--;
    }
  }

  return lis;
}

// Example usage:
const array = [2, 4, 3, 5, 1, 7, 6, 9, 8];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(array);
console.log(longestIncreasingSubsequence);
