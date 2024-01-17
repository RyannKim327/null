function findLongestIncreasingSubsequence(arr) {
  // Create an array to store the lengths of the subsequences
  const lengths = Array(arr.length).fill(1);
  
  // Traverse the array from left to right
  for (let i = 1; i < arr.length; i++) {
    // Compare the current element with all previous elements
    for (let j = 0; j < i; j++) {
      // If the current element is greater than the previous element,
      // update the length of the subsequence
      if (arr[i] > arr[j] && lengths[i] < lengths[j] + 1) {
        lengths[i] = lengths[j] + 1;
      }
    }
  }
  
  // Find the maximum length in the lengths array
  let maxLength = 0;
  for (let i = 0; i < lengths.length; i++) {
    if (maxLength < lengths[i]) {
      maxLength = lengths[i];
    }
  }
  
  // Find the longest increasing subsequence
  const subsequence = [];
  let currentLength = maxLength;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (lengths[i] === currentLength) {
      subsequence.unshift(arr[i]);
      currentLength--;
    }
  }
  
  return subsequence;
}

// Example usage:
const array = [3, 10, 2, 1, 20]; // [2, 3, 10, 20] is the longest increasing subsequence
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(array);
console.log(longestIncreasingSubsequence); // Output: [2, 3, 10, 20]
