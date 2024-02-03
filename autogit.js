function findLongestIncreasingSubsequence(arr) {
  const length = arr.length;
  const dp = new Array(length).fill(1);

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  // Find the maximum subsequence length
  let maxLength = 0;
  for (let i = 0; i < length; i++) {
    if (dp[i] > maxLength) {
      maxLength = dp[i];
    }
  }

  // Find the longest increasing subsequence
  const result = [];
  let lastIndex = -1;
  for (let i = length - 1; i >= 0; i--) {
    if (dp[i] === maxLength && (lastIndex === -1 || arr[i] < arr[lastIndex])) {
      result.unshift(arr[i]);
      maxLength--;
      lastIndex = i;
    }
  }

  return result;
}

// Usage
const inputArray = [3, 10, 2, 1, 20];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(inputArray);
console.log(longestIncreasingSubsequence); // [3, 10, 20]
