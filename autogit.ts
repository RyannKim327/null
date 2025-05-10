function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;

  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// Example usage:
const arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(arr)); // Output: 4 (The LIS is [2,3,7,101])
function lengthOfLIS(nums: number[]): number {
  const tails: number[] = [];

  for (const num of nums) {
    let left = 0, right = tails.length;

    // Binary search for the insertion point
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left < tails.length) {
      tails[left] = num;
    } else {
      tails.push(num);
    }
  }

  return tails.length;
}

// Example usage:
const arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(arr)); // 4
