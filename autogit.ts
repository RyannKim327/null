function maxSubArraySum(arr: number[]): { maxSum: number, start: number, end: number } {
  let maxSum = arr[0];
  let currentSum = 0;

  let startTemp = 0;
  let start = 0;
  let end = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    
    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = startTemp;
      end = i;
    }
    
    if (currentSum < 0) {
      currentSum = 0;
      startTemp = i + 1;
    }
  }

  return { maxSum, start, end };
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArraySum(arr);
console.log(result); // { maxSum: 6, start: 3, end: 6 }, subarray is [4, -1, 2, 1]
