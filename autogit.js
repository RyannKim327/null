function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const lengths = new Array(n).fill(1); // Initialize lengths array with default values of 1
  let maxLength = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lengths[i] < lengths[j] + 1) {
        lengths[i] = lengths[j] + 1;
        if (lengths[i] > maxLength) {
          maxLength = lengths[i];
        }
      }
    }
  }

  const subsequence = [];
  let count = maxLength;

  for (let i = n - 1; i >= 0 && count > 0; i--) {
    if (lengths[i] === count) {
      subsequence.unshift(arr[i]);
      count--;
    }
  }

  return subsequence;
}

// Example usage:
const arr = [3, 10, 2, 1, 20];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(arr);
console.log(longestIncreasingSubsequence); // Output: [3, 10, 20]
