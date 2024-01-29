function findLongestIncreasingSubsequence(array) {
  const n = array.length;
  const lengths = new Array(n).fill(1); // Initialize all lengths to 1

  // Compute lengths of increasing subsequences
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] > array[j]) {
        lengths[i] = Math.max(lengths[i], lengths[j] + 1);
      }
    }
  }

  // Find the maximum length
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    maxLength = Math.max(maxLength, lengths[i]);
  }

  // Find the longest increasing subsequence based on the lengths computed
  const subsequence = [];
  let currLength = maxLength;
  for (let i = n - 1; i >= 0; i--) {
    if (lengths[i] === currLength) {
      subsequence.unshift(array[i]);
      currLength--;
    }
  }

  return subsequence;
}

// Example usage:
const array = [3, 10, 2, 1, 20];
const longestSubsequence = findLongestIncreasingSubsequence(array);
console.log(longestSubsequence); // Output: [3, 10, 20]
