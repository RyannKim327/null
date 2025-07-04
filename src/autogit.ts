function lengthOfLIS(nums: number[]): number {
    if (nums.length === 0) return 0;

    const dp: number[] = [];

    for (const num of nums) {
        // Use binary search to find the insertion point
        let left = 0;
        let right = dp.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (dp[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // If left is equal to the length of dp, it means num is greater than all elements in dp
        if (left === dp.length) {
            dp.push(num);
        } else {
            dp[left] = num; // Replace the found position with num
        }
    }

    return dp.length; // The length of dp is the length of the longest increasing subsequence
}

// Example usage:
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Output: 4
