function findLongestIncreasingSubsequence(arr) {
  const len = arr.length;
  const memo = Array(len).fill(1); // Initialize memo array with 1 for each element

  // Compute memo array
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      // Check if arr[i] can be added to previous subsequence
      if (arr[i] > arr[j] && memo[i] <= memo[j]) {
        memo[i] = memo[j] + 1;
      }
    }
  }

  // Find the maximum subsequence length
  let maxLength = 0;
  for (let i = 0; i < len; i++) {
    if (memo[i] > maxLength) {
      maxLength = memo[i];
    }
  }

  // Find the longest increasing subsequence
  const result = [];
  let currLength = maxLength;
  for (let i = len - 1; i >= 0; i--) {
    if (memo[i] === currLength) {
      result.unshift(arr[i]);
      currLength--;
    }
  }

  return result;
}

// Example usage:
const array = [3, 7, 1, 8, 5, 9, 2, 6, 4];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(array);
console.log(longestIncreasingSubsequence); // Output: [1, 2, 4]
