function longestIncreasingSubsequence(arr: number[]): number[] {
  const n = arr.length;
  const dp = new Array(n).fill(1); // dp[i] will store the length of the longest increasing subsequence ending at index i
  const prev = new Array(n).fill(-1); // prev[i] will store the index of the previous element in the longest increasing subsequence ending at index i

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
  }

  let maxLen = 1;
  let idx = 0;
  for (let i = 1; i < n; i++) {
    if (dp[i] > maxLen) {
      maxLen = dp[i];
      idx = i;
    }
  }

  const lis = new Array(maxLen);
  let k = maxLen - 1;
  while (idx >= 0) {
    lis[k--] = arr[idx];
    idx = prev[idx];
  }

  return lis;
}
const arr = [10, 22, 9, 33, 21, 50, 41, 60];
const lis = longestIncreasingSubsequence(arr);
console.log(lis); // [10, 22, 33, 50, 60]
