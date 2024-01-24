function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;

  // Create an array to store the lengths of the longest increasing subsequences
  const dp = Array(n).fill(1);

  // Iterate over the array starting from the second element
  for (let i = 1; i < n; i++) {
    // Compare the current element with all previous elements
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
        // Update the length of the longest increasing subsequence
        dp[i] = dp[j] + 1;
      }
    }
  }

  // Find the maximum length from the dp array
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    if (dp[i] > maxLength) {
      maxLength = dp[i];
    }
  }

  return maxLength;
}
function findLongestIncreasingSubsequenceWithSubsequence(arr) {
  const n = arr.length;

  const dp = Array(n).fill(1);
  const sequences = Array(n).fill(null);

  let maxLength = 0;
  let maxIndex = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        sequences[i] = j; // Store the previous index for forming the subsequence
      }
    }
    if (dp[i] > maxLength) {
      maxLength = dp[i];
      maxIndex = i;
    }
  }

  const subsequence = [];
  while (maxIndex !== null) {
    subsequence.unshift(arr[maxIndex]);
    maxIndex = sequences[maxIndex];
  }

  return { length: maxLength, subsequence };
}
const arr = [3, 10, 2, 1, 20];
console.log(findLongestIncreasingSubsequence(arr));
// Output: 3

console.log(findLongestIncreasingSubsequenceWithSubsequence(arr));
// Output: { length: 3, subsequence: [3, 10, 20] }
