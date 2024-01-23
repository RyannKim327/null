function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const lis = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[j] + 1 > lis[i]) {
        lis[i] = lis[j] + 1;
      }
    }
  }

  let maxLength = 0;
  let maxIndex = 0;
  for (let i = 0; i < n; i++) {
    if (lis[i] > maxLength) {
      maxLength = lis[i];
      maxIndex = i;
    }
  }

  const subsequence = [arr[maxIndex]];
  let currentLength = maxLength - 1;
  for (let i = maxIndex - 1; i >= 0; i--) {
    if (lis[i] === currentLength) {
      subsequence.unshift(arr[i]);
      currentLength--;
    }
  }

  return subsequence;
}

// Example usage:
const arr = [3, 10, 2, 1, 20];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(arr);
console.log(longestIncreasingSubsequence); // Output: [3, 10, 20]
