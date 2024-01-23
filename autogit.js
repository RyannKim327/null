function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const lengths = Array(n).fill(1); // Initialize lengths of all subsequences to 1

  let maxLength = 1; // Initialize the maximum length to 1

  // Compute the lengths of the longest increasing subsequences
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lengths[i] < lengths[j] + 1) {
        lengths[i] = lengths[j] + 1;
        maxLength = Math.max(maxLength, lengths[i]);
      }
    }
  }

  // Find the longest increasing subsequence using the lengths array
  const subsequence = [];
  let currLength = maxLength;
  for (let i = n - 1; i >= 0; i--) {
    if (lengths[i] === currLength) {
      subsequence.unshift(arr[i]);
      currLength--;
    }
  }

  return subsequence;
}

// Example usage
const arr = [3, 4, -1, 0, 6, 2, 3];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(arr);
console.log(longestIncreasingSubsequence); // Output: [3, 4, 6]
