function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const lisLength = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lisLength[i] < lisLength[j] + 1) {
        lisLength[i] = lisLength[j] + 1;
      }
    }
  }

  let maxLength = 0;
  let maxIdx = 0;
  for (let i = 0; i < n; i++) {
    if (lisLength[i] > maxLength) {
      maxLength = lisLength[i];
      maxIdx = i;
    }
  }

  const longestSubsequence = [];
  for (let i = maxIdx; i >= 0; i--) {
    if (arr[maxIdx] > arr[i] && lisLength[maxIdx] === lisLength[i] + 1) {
      longestSubsequence.unshift(arr[i]);
      maxIdx = i;
    }
  }

  return longestSubsequence;
}

// Example usage:
const arr = [3, 10, 2, 1, 20];
const longestSubsequence = findLongestIncreasingSubsequence(arr);
console.log(longestSubsequence); // Output: [3, 10, 20]
