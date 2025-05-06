function maxSubArray(nums: number[]): { maxSum: number; start: number; end: number } {
  let maxSum = nums[0];
  let currentSum = 0;
  let start = 0;
  let tempStart = 0;
  let end = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }

    if (currentSum < 0) {
      currentSum = 0;
      tempStart = i + 1;
    }
  }

  return { maxSum, start, end };
}
