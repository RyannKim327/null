function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const lis = new Array(n).fill(1);
  let maxLength = 1;
  let maxIndex = 0;

  // Dynamic programming approach
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
        if (maxLength < lis[i]) {
          maxLength = lis[i];
          maxIndex = i;
        }
      }
    }
  }

  // Backtracking to get the subsequence
  const result = [];
  let currentLength = maxLength;
  result.unshift(arr[maxIndex]);

  for (let i = maxIndex - 1; i >= 0; i--) {
    if (lis[i] === currentLength - 1 && arr[i] < result[0]) {
      result.unshift(arr[i]);
      currentLength--;
    }
  }

  return result;
}
const arr = [3, 10, 2, 1, 20];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(arr);
console.log(longestIncreasingSubsequence);
