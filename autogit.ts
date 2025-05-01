function lengthOfLIS(nums: number[]): number {
    const n = nums.length;
    if (n === 0) return 0;

    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

// Example:
const arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(arr)); // Output: 4
function findLIS(nums: number[]): number[] {
    const n = nums.length;
    if (n === 0) return [];

    const dp = new Array(n).fill(1);
    const prev = new Array(n).fill(-1);

    let maxLength = 1;
    let maxIndex = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
        if (dp[i] > maxLength) {
            maxLength = dp[i];
            maxIndex = i;
        }
    }

    const lis = [];
    for (let i = maxIndex; i >= 0; i = prev[i]) {
        lis.push(nums[i]);
        if (prev[i] === -1) break;
    }
    lis.reverse();
    return lis;
}

// Example:
const arr2 = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(findLIS(arr2)); // Output: [2, 3, 7, 101]
