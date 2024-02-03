function findLIS(arr) {
  const n = arr.length;
  const dp = Array(n).fill(1);
  const subseq = Array(n).fill(null);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        subseq[i] = j;
      }
    }
  }

  let maxLen = dp[0];
  let lastIndex = 0;
  for (let i = 1; i < n; i++) {
    if (dp[i] > maxLen) {
      maxLen = dp[i];
      lastIndex = i;
    }
  }

  const lisIndices = [];
  while (lastIndex !== null) {
    lisIndices.unshift(lastIndex);
    lastIndex = subseq[lastIndex];
  }

  return lisIndices.map((index) => arr[index]);
}

// Example usage:
const arr = [3, 4, -1, 0, 6, 2, 3];
const lis = findLIS(arr);
console.log(lis); // Output: [-1, 0, 2, 3]
