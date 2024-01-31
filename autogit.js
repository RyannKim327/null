function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const lis = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
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

  const subsequence = [];
  let currentLength = maxLength;
  subsequence[currentLength - 1] = arr[maxIndex];
  currentLength--;

  for (let i = maxIndex - 1; i >= 0; i--) {
    if (arr[i] < arr[maxIndex] && lis[i] === lis[maxIndex] - 1) {
      subsequence[currentLength - 1] = arr[i];
      maxIndex = i;
      currentLength--;
    }
  }

  return subsequence;
}

// Example usage:
const array = [3, 10, 2, 1, 20];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(array);
console.log(longestIncreasingSubsequence); // Output: [3, 10, 20]
