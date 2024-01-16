function findLongestIncreasingSubsequence(arr) {
  const length = arr.length;
  const dp = new Array(length).fill(1);
  const prev = new Array(length).fill(-1);

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
  }

  let maxIndex = 0;
  for (let i = 1; i < length; i++) {
    if (dp[i] > dp[maxIndex]) {
      maxIndex = i;
    }
  }

  const sequence = [];
  let currentIndex = maxIndex;
  while (currentIndex !== -1) {
    sequence.push(arr[currentIndex]);
    currentIndex = prev[currentIndex];
  }

  return sequence.reverse();
}

// Example usage:
const array = [3, 4, -1, 0, 6, 2, 3];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(array);
console.log(longestIncreasingSubsequence); // Output: [-1, 0, 2, 3]
