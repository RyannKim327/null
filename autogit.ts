function lengthOfLIS(nums: number[]): number {
    if (nums.length === 0) return 0;

    const dp = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}
function lengthOfLIS(nums: number[]): number {
    const tail: number[] = [];

    function binarySearch(target: number): number {
        let left = 0, right = tail.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (tail[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }

    for (const num of nums) {
        const idx = binarySearch(num);
        if (idx < tail.length) {
            tail[idx] = num;
        } else {
            tail.push(num);
        }
    }

    return tail.length;
}
