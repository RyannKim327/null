function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = Array(n).fill(1); // Initialize all elements of dp array to 1
  
  // Compute longest increasing subsequence ending at each element
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1; // Update the longest increasing subsequence size
      }
    }
  }
  
  // Find the maximum value in the dp array
  let maxLength = Math.max(...dp);
  
  // Find the indices of the longest increasing subsequence elements
  let subsequenceIndices = [];
  let lastIndex = dp.indexOf(maxLength);
  for (let i = lastIndex; i >= 0; i--) {
    if (arr[i] < arr[lastIndex] && dp[i] === dp[lastIndex] - 1) {
      subsequenceIndices.unshift(i);
      lastIndex = i;
    }
  }
  
  // Build the longest increasing subsequence from the indices
  let subsequence = subsequenceIndices.map(index => arr[index]);
  
  return subsequence;
}

// Example usage:
const array = [3, 4, -1, 0, 6, 2, 3];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(array);
console.log(longestIncreasingSubsequence);
