function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  let maxLength = 0;
  let endIndex = 0;

  for (let i = 0; i < n; i++) {
    if (dp[i] > maxLength) {
      maxLength = dp[i];
      endIndex = i;
    }
  }

  const lis = [];
  let currentLength = maxLength;

  lis.unshift(arr[endIndex]);

  for (let i = endIndex - 1; i >= 0; i--) {
    if (arr[i] < arr[endIndex] && dp[i] === currentLength - 1) {
      lis.unshift(arr[i]);
      currentLength--;
    }
  }

  return lis;
}

// Example usage:
const array = [3, 10, 2, 1, 20];
console.log(findLongestIncreasingSubsequence(array)); // Output: [3, 10, 20]
