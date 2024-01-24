function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const lengths = Array(n).fill(1); // Array to store lengths of increasing subsequences

  // Compute lengths of increasing subsequences
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lengths[i] < lengths[j] + 1) {
        lengths[i] = lengths[j] + 1;
      }
    }
  }

  let maxLength = 0; // Length of the longest increasing subsequence
  let endIndex = 0; // Index of the last element in the longest increasing subsequence

  // Find the index of the maximum value in lengths array
  for (let i = 0; i < n; i++) {
    if (maxLength < lengths[i]) {
      maxLength = lengths[i];
      endIndex = i;
    }
  }

  // Construct the longest increasing subsequence
  const lis = [];
  lis.push(arr[endIndex]);

  while (maxLength > 1) {
    maxLength--;
    endIndex--;
    while (arr[endIndex] >= arr[endIndex + 1]) {
      endIndex--;
    }
    lis.push(arr[endIndex]);
  }

  return lis.reverse(); // Reverse the array to get the correct order
}

// Example usage:
const array = [3, 10, 2, 1, 20];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(array);
console.log(longestIncreasingSubsequence); // Output: [3, 10, 20]
