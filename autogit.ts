function lengthOfLIS(nums: number[]): number {
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

// Example usage:
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Output: 4
function lengthOfLIS(nums: number[]): number {
    const piles: number[] = [];

    for (const num of nums) {
        let left = 0;
        let right = piles.length;

        // Find the position to replace or expand the piles array
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (piles[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // If `left` is equal to the number of piles, add a new pile
        if (left === piles.length) {
            piles.push(num);
        } else {
            // Otherwise, replace the top of the pile
            piles[left] = num;
        }
    }

    return piles.length;
}

// Example usage:
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Output: 4
