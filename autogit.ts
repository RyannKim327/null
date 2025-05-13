function longestIncreasingSubsequence(arr: number[]): number[] {
  const n = arr.length;
  if (n === 0) return [];

  // dp[i] will hold the length of the LIS ending at index i
  const dp = new Array(n).fill(1);
  // To reconstruct the subsequence, track previous indices
  const prev = new Array(n).fill(-1);

  let maxLength = 1;
  let maxIndex = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
    if (dp[i] > maxLength) {
      maxLength = dp[i];
      maxIndex = i;
    }
  }

  // Reconstruct the longest increasing subsequence
  const lis: number[] = [];
  let curr = maxIndex;
  while (curr !== -1) {
    lis.push(arr[curr]);
    curr = prev[curr];
  }
  lis.reverse();

  return lis;
}

// Example usage:
const arr = [10, 9, 2, 5, 3, 7, 101, 18];
const lis = longestIncreasingSubsequence(arr);
console.log(lis); // Output: [2, 3, 7, 18]
