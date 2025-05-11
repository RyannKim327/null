function longestIncreasingSubsequence(arr: number[]): number[] {
  const n = arr.length;
  if (n === 0) return [];

  // dp[i] will hold the length of the LIS ending at index i
  const dp = new Array(n).fill(1);

  // To reconstruct the sequence, keep track of parents
  const parent = new Array(n).fill(-1);

  let maxLen = 1;
  let maxIndex = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        parent[i] = j;
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i];
      maxIndex = i;
    }
  }

  // Reconstruct the longest increasing subsequence
  const lis: number[] = [];
  let currentIndex = maxIndex;
  while (currentIndex !== -1) {
    lis.push(arr[currentIndex]);
    currentIndex = parent[currentIndex];
  }

  return lis.reverse();
}

// Usage example:
const array = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(longestIncreasingSubsequence(array)); // Output: [2, 3, 7, 18]
