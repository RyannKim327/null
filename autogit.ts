function longestIncreasingSubsequence(arr: number[]): number[] {
  const n = arr.length;
  const dp = new Array(n).fill(1); // dp[i] will store the length of LIS ending at index i
  const prev = new Array(n).fill(-1); // prev[i] will store the previous element in the LIS

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
  }

  let maxLength = Math.max(...dp);
  let endIndex = dp.indexOf(maxLength);
  let lis: number[] = [];

  while (endIndex !== -1) {
    lis.unshift(arr[endIndex]);
    endIndex = prev[endIndex];
  }

  return lis;
}
const arr = [10, 22, 9, 33, 21, 50, 41, 60];
const lis = longestIncreasingSubsequence(arr);
console.log(lis); // [10, 22, 33, 50, 60]
