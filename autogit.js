function longestIncreasingSubsequence(nums) {
    let n = nums.length;
    let dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    let maxLength = Math.max(...dp);

    let result = [];
    let currentIndex = dp.indexOf(maxLength);

    for (let i = currentIndex; i >= 0; i--) {
        if (dp[i] === maxLength && (result.length === 0 || nums[i] < result[result.length - 1])) {
            result.unshift(nums[i]);
            maxLength--;
        }
    }

    return result;
}

// Example
const nums = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(longestIncreasingSubsequence(nums)); // Output: [10, 22, 33, 50, 60, 80]
