function longestIncreasingSubsequence(arr: number[]): number[] {
  const len = arr.length;
  const dp = new Array(len).fill(1); // dp[i] will store the length of LIS ending at index i
  const prev = new Array(len).fill(-1); // prev[i] will store the previous element in the LIS

  let maxLen = 1;
  let maxIndex = 0;

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i];
      maxIndex = i;
    }
  }

  const lis = new Array(maxLen);
  let index = maxIndex;
  for (let i = maxLen - 1; i >= 0; i--) {
    lis[i] = arr[index];
    index = prev[index];
  }

  return lis;
}
const arr = [10, 22, 9, 33, 21, 50, 41, 60];
const lis = longestIncreasingSubsequence(arr);
console.log(lis); // [10, 22, 33, 50, 60]
