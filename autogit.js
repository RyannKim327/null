function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const lis = Array(n).fill(1); // initialize LIS array with 1s

  // Find the longest increasing subsequence
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }

  // Find the maximum length of LIS
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    if (maxLength < lis[i]) {
      maxLength = lis[i];
    }
  }

  // Find the longest increasing subsequence
  const longestSubsequence = [];
  let length = maxLength;
  for (let i = n - 1; i >= 0; i--) {
    if (lis[i] === length) {
      longestSubsequence.unshift(arr[i]);
      length--;
    }
  }

  return longestSubsequence;
}

// Example usage
const array = [10, 22, 9, 33, 21, 50, 41, 60, 80];
const longestSubsequence = findLongestIncreasingSubsequence(array);
console.log(longestSubsequence); // Output: [10, 22, 33, 50, 60, 80]
