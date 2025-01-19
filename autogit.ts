function longestIncreasingSubsequence(arr: number[]): number[] {
  const n = arr.length;
  const dp = new Array(n).fill(1);
  const prev = new Array(n).fill(-1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
  }

  let maxLength = 0;
  let endIndex = -1;
  for (let i = 0; i < n; i++) {
    if (dp[i] > maxLength) {
      maxLength = dp[i];
      endIndex = i;
    }
  }

  const lis = new Array(maxLength);
  let index = endIndex;
  for (let i = maxLength - 1; i >= 0; i--) {
    lis[i] = arr[index];
    index = prev[index];
  }

  return lis;
}
const arr = [3, 4, 1, 2, 5, 6, 7, 3, 2, 1];
const lis = longestIncreasingSubsequence(arr);
console.log(lis); // [1, 2, 3, 5, 6, 7]
