function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const lengths = new Array(n).fill(1);  // Initialize lengths array with default value 1

  // Calculate lengths of longest increasing subsequences
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lengths[i] < lengths[j] + 1) {
        lengths[i] = lengths[j] + 1;
      }
    }
  }

  // Find the maximum length
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    if (lengths[i] > maxLength) {
      maxLength = lengths[i];
    }
  }

  // Find the longest increasing subsequence
  const subsequence = [];
  let lastIndex = -1;

  for (let i = n - 1; i >= 0; i--) {
    if (lengths[i] === maxLength && (lastIndex === -1 || arr[i] < arr[lastIndex])) {
      subsequence.unshift(arr[i]);
      maxLength--;
      lastIndex = i;
    }
  }

  return subsequence;
}

// Example usage:
const array = [3, 10, 2, 1, 20];
const longestSubsequence = findLongestIncreasingSubsequence(array);
console.log(longestSubsequence);  // Output: [3, 10, 20]
