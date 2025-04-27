function lengthOfLIS(nums: number[]): number {
    if (nums.length === 0) return 0;

    const tails: number[] = [];

    for (const num of nums) {
        let left = 0;
        let right = tails.length;

        // Binary search for the first element in tails >= num
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // If num is larger than any element in tails
        if (left === tails.length) {
            tails.push(num);
        } else {
            tails[left] = num; // Replace to maintain minimal tail
        }
    }

    return tails.length;
}
function longestIncreasingSubsequence(nums: number[]): number[] {
    if (nums.length === 0) return [];

    const tails: number[] = [];
    const indices: number[] = []; // store the indices of tails
    const predecessors: number[] = new Array(nums.length).fill(-1);
    let length = 0;
    let lastIndex = -1;

    for (let i = 0; i < nums.length; i++) {
        // Binary search in tails
        let left = 0, right = length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[indices[mid]] < nums[i]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        if (left === length) {
            indices[length] = i;
            length++;
        } else {
            indices[left] = i;
        }

        // Track predecessor
        predecessors[i] = left > 0 ? indices[left - 1] : -1;

        // Keep track of last index of the LIS
        if (left === length - 1) {
            lastIndex = i;
        }
    }

    // Reconstruct the sequence
    const lis: number[] = [];
    let cur = lastIndex;
    while (cur !== -1) {
        lis.unshift(nums[cur]);
        cur = predecessors[cur];
    }

    return lis;
}
