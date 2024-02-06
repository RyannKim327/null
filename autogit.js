function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const lengths = new Array(n).fill(1); // Array to store the lengths of increasing subsequences

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
  let currentLength = maxLength;
  for (let i = n - 1; i >= 0; i--) {
    if (lengths[i] === currentLength) {
      subsequence.unshift(arr[i]);
      currentLength--;
    }
  }

  return subsequence;
}
const arr = [3, 10, 2, 1, 20];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(arr);
console.log(longestIncreasingSubsequence); // Output: [3, 10, 20]
