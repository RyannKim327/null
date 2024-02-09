function findLongestIncreasingSubsequence(array) {
  // Create an array to store the length of the subsequence ending at each index
  const dp = Array(array.length).fill(1);

  // Iterate over the array to compute the length of the longest increasing subsequence
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] > array[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  // Find the maximum length in the dp array
  let maxLength = 0;
  for (let i = 0; i < dp.length; i++) {
    if (dp[i] > maxLength) {
      maxLength = dp[i];
    }
  }

  // Find the longest increasing subsequence based on the dp array
  const result = [];
  let currentIndex = maxLength - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (dp[i] === currentIndex + 1) {
      result[currentIndex] = array[i];
      currentIndex--;
    }
  }

  return result;
}

// Usage example:
const array = [3, 10, 2, 1, 20];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(array);
console.log(longestIncreasingSubsequence);  // Output: [3, 10, 20]
