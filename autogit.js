function findMaxSubarraySum(arr) {
  let currSum = 0;
  let maxSum = -Infinity;
  let start = 0;
  let end = 0;
  let maxStart = 0;
  
  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    
    if (currSum > maxSum) {
      maxSum = currSum;
      start = maxStart;
      end = i;
    }
    
    if (currSum < 0) {
      currSum = 0;
      maxStart = i + 1;
    }
  }
  
  return {
    subarray: arr.slice(start, end + 1),
    sum: maxSum
  };
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = findMaxSubarraySum(arr);
console.log(result.subarray); // Output: [4, -1, 2, 1]
console.log(result.sum);     // Output: 6
