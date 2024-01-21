function findMaxSubarray(arr) {
  let maxSum = 0;
  let currentSum = 0;

  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum < 0) {
      currentSum = 0;
      tempStart = i + 1;
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  return arr.slice(start, end + 1);
}

// Example usage
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubarray = findMaxSubarray(array);
console.log(maxSubarray); // Output: [4, -1, 2, 1]
