function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const lis = Array(n).fill(1);
  let result = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
        if (lis[i] > result) result = lis[i];
      }
    }
  }

  return result;
}

// Example usage:
const arr = [10, 22, 9, 33, 21, 50, 41, 60];
const longestSubsequenceLength = findLongestIncreasingSubsequence(arr);
console.log(`Length of Longest Increasing Subsequence: ${longestSubsequenceLength}`);
