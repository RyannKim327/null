function longestIncreasingSubsequence(nums: number[]): number {
  if (nums.length === 0) return 0;

  const dp: number[] = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// Example usage
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(longestIncreasingSubsequence(nums)); // Output: 4
function longestIncreasingSubsequence(nums: number[]): number {
  const tails: number[] = [];
  
  for (const num of nums) {
    let left = 0;
    let right = tails.length;

    // Binary search to find the insertion point
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    // If `left` is equal to the length of tails, it means num is larger than any element in tails
    if (left === tails.length) {
      tails.push(num);
    } else {
      tails[left] = num; // Update the position with the new smallest tail value
    }
  }

  return tails.length;
}

// Example usage
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(longestIncreasingSubsequence(nums)); // Output: 4
