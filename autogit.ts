function maxSubArray(nums: number[]): { maxSum: number, start: number, end: number } {
  let maxSum = nums[0];
  let currentSum = nums[0];
  let start = 0;
  let maxStart = 0;
  let maxEnd = 0;

  for (let i = 1; i < nums.length; i++) {
    if (currentSum + nums[i] < nums[i]) {
      currentSum = nums[i];
      start = i;
    } else {
      currentSum += nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxStart = start;
      maxEnd = i;
    }
  }

  return { maxSum, start: maxStart, end: maxEnd };
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(arr);
console.log(result); // { maxSum: 6, start: 3, end: 6 }
