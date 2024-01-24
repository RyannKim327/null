function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  
  // Create an array to store the lengths of the longest increasing subsequences
  const lisLengths = new Array(n).fill(1);
  
  // Find the length of the longest increasing subsequence
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lisLengths[i] < lisLengths[j] + 1) {
        lisLengths[i] = lisLengths[j] + 1;
      }
    }
  }
  
  // Find the maximum length of the LIS
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    if (lisLengths[i] > maxLength) {
      maxLength = lisLengths[i];
    }
  }
  
  // Find the longest increasing subsequence
  const lis = [];
  let lastIndex = -1;
  for (let i = n - 1; i >= 0; i--) {
    if (lisLengths[i] === maxLength && (lastIndex === -1 || arr[i] < arr[lastIndex])) {
      lis.unshift(arr[i]);
      maxLength--;
      lastIndex = i;
    }
  }
  
  return lis;
}

// Test the function
const arr = [3, 4, -1, 0, 6, 2, 3];
const lis = findLongestIncreasingSubsequence(arr);
console.log(lis); // Output: [-1, 0, 2, 3]
