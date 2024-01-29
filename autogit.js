function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = Array(n); // Dynamic programming array to store LIS lengths

  // Initialize all LIS lengths as 1
  for (let i = 0; i < n; i++) {
    dp[i] = 1;
  }

  // Compute LIS values
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  // Find the maximum value in dp array
  let maxLength = Math.max(...dp);

  // Create an array to store the LIS
  const lis = [];

  // Find the actual LIS elements
  for (let i = n - 1; i >= 0 && maxLength > 0; i--) {
    if (dp[i] === maxLength) {
      lis.unshift(arr[i]);
      maxLength--;
    }
  }

  return lis;
}

// Example usage
const array = [3, 10, 2, 1, 20];
const lis = findLongestIncreasingSubsequence(array);

console.log(lis); // Output: [3, 10, 20]
