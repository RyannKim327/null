function findLongestIncreasingSubsequence(array) {
  const n = array.length;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] > array[j] && dp[i] <= dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  let maxLen = Math.max(...dp);
  let result = [];

  for (let i = n - 1; i >= 0; i--) {
    if (dp[i] === maxLen) {
      result.push(array[i]);
      maxLen--;
    }
  }

  return result.reverse();
}

// Example usage:
const arr = [3, 10, 2, 1, 20];
const lis = findLongestIncreasingSubsequence(arr);
console.log(lis); // Output: [3, 10, 20]
