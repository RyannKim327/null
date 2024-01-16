function findMaxSubarray(array) {
  let currentSum = array[0];
  let maxSum = array[0];

  for (let i = 1; i < array.length; i++) {
    // Choose the larger value between the current element and the sum of the current element and the previous subarray
    currentSum = Math.max(array[i], currentSum + array[i]);

    // Update the maximum sum if the current sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
const array = [2, -5, 4, -2, 1, 7, -6, -4, 3];
const maxSum = findMaxSubarray(array);
console.log(maxSum); // Output: 10
