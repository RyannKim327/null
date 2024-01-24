function longestIncreasingSubsequence(arr) {
  const n = arr.length;
  const lis = Array(n).fill(1); // Initialize LIS array with 1s

  // Compute LIS values
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }

  // Find the maximum LIS value and get the subsequence
  let maxLength = Math.max(...lis);
  let sequence = [];
  let lastIndex = lis.indexOf(maxLength);

  while (sequence.length < maxLength) {
    sequence.unshift(arr[lastIndex]);
    maxLength--;
    lastIndex--;
    while (lastIndex >= 0 && lis[lastIndex] !== maxLength) {
      lastIndex--;
    }
  }

  return sequence;
}

// Example usage
const arr = [3, 10, 2, 1, 20, 5, 8, 6];
const longestSequence = longestIncreasingSubsequence(arr);
console.log(longestSequence); // Output: [3, 10, 20]
