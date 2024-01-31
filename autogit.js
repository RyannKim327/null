function findLongestIncreasingSubsequence(arr) {
  // Create an array to store the lengths of increasing subsequences
  const lengths = Array(arr.length).fill(1);

  // Traverse the array from the second element
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      // Check if arr[i] can be added to the increasing subsequence
      if (arr[i] > arr[j] && lengths[i] < lengths[j] + 1) {
        lengths[i] = lengths[j] + 1;
      }
    }
  }

  // Find the maximum length in the lengths array
  let maxLength = 0;
  for (let i = 0; i < lengths.length; i++) {
    if (lengths[i] > maxLength) {
      maxLength = lengths[i];
    }
  }

  // Find the longest increasing subsequence using the lengths array
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
const arr = [3, 10, 2, 1, 20];
const subsequence = findLongestIncreasingSubsequence(arr);
console.log(subsequence); // Output: [3, 10, 20]
