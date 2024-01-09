function longestIncreasingSubsequence(arr) {
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
  let endIndex = 0;

  for (let i = 0; i < n; i++) {
    if (maxLength < lis[i]) {
      maxLength = lis[i];
      endIndex = i;
    }
  }

  const longestSubsequence = [];
  
  let currentLength = maxLength;
  for (let i = endIndex; i >= 0; i--) {
    if (lis[i] === currentLength) {
      longestSubsequence.unshift(arr[i]);
      currentLength--;
    }
  }

  return longestSubsequence;
}

// Example usage:
const array = [3, 10, 2, 1, 20];
const result = longestIncreasingSubsequence(array);
console.log(result); // Output: [3, 10, 20]
