function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  
  // Create an array to store the lengths of the longest
  // increasing subsequences ending at each index
  const lis = new Array(n).fill(1);
  
  // Traverse the given array from left to right
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      // If the current element is greater than the previous
      // element, and the LIS ending at previous element plus
      // one is greater than the LIS ending at current element,
      // update the LIS for the current element.
      if (arr[i] > arr[j] && lis[i] <= lis[j]) {
        lis[i] = lis[j] + 1;
      }
    }
  }
  
  // Find the maximum length of the LIS
  let maxLisLength = 0;
  for (let i = 0; i < n; i++) {
    if (lis[i] > maxLisLength) {
      maxLisLength = lis[i];
    }
  }
  
  // Construct the LIS
  const lisArray = [];
  let currentLisLength = maxLisLength;
  for (let i = n - 1; i >= 0; i--) {
    if (lis[i] === currentLisLength) {
      lisArray.unshift(arr[i]);
      currentLisLength--;
    }
  }
  
  return lisArray;
}

// Example usage:
const array = [3, 4, -1, 0, 6, 2, 3];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(array);
console.log(longestIncreasingSubsequence);
