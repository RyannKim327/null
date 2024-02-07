function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] <= dp[j]) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  let maxIndex = 0;
  for (let i = 1; i < n; i++) {
    if (dp[i] > dp[maxIndex]) {
      maxIndex = i;
    }
  }

  // Construct the longest increasing subsequence
  const lis = [];
  let index = dp[maxIndex] - 1;
  lis[index] = arr[maxIndex];
  index--;
  for (let i = maxIndex - 1; i >= 0; i--) {
    if (arr[i] < arr[maxIndex] && dp[i] === dp[maxIndex] - 1) {
      lis[index] = arr[i];
      index--;
      maxIndex = i;
    }
  }

  return lis;
}

// Example usage:
const array = [10, 22, 9, 33, 21, 50, 41, 60, 80];
const lis = findLongestIncreasingSubsequence(array);
console.log("Longest Increasing Subsequence:", lis);
