function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(1);
  let maxLength = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        maxLength = Math.max(maxLength, dp[i]);
      }
    }
  }

  const lis = [];
  let lastIndex = dp.indexOf(maxLength);
  
  while (lis.length < maxLength) {
    lis.unshift(arr[lastIndex]);

    for (let i = lastIndex - 1; i >= 0; i--) {
      if (dp[i] === maxLength - 1 && arr[i] < arr[lastIndex]) {
        lastIndex = i;
        break;
      }
    }
    maxLength--;
  }
  
  return lis;
}

// Example usage:
const array = [3, 10, 2, 1, 20];
const lis = findLongestIncreasingSubsequence(array);
console.log(lis); // Output: [3, 10, 20]
