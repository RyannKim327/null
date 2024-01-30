function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(1);
  const sequence = [];

  let maxLength = 1;
  let prevIndex = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;

          if (dp[i] > maxLength) {
            maxLength = dp[i];
            prevIndex = j;
          }
        }
      }
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    if (dp[i] === maxLength) {
      sequence.unshift(arr[i]);
      maxLength--;
    }
  }

  return sequence;
}

// Example usage
const array = [4, 2, 10, 6, 5, 1];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(array);
console.log(longestIncreasingSubsequence);
