function findMaxSubarray(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  let startIndex = 0;
  let endIndex = 0;
  let tempStartIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (currentSum + arr[i] < arr[i]) {
      currentSum = arr[i];
      tempStartIndex = i;
    } else {
      currentSum += arr[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      startIndex = tempStartIndex;
      endIndex = i;
    }
  }

  return arr.slice(startIndex, endIndex + 1);
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubarray = findMaxSubarray(array);
console.log(maxSubarray); // Output: [4, -1, 2, 1]
