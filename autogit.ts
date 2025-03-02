function lengthOfLIS(nums: number[]): number {
    if (nums.length === 0) return 0;

    const tails: number[] = [];
    
    for (const num of nums) {
        let left = 0, right = tails.length;

        // Perform binary search
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // If left is equal to the size of tails, it means num is greater than all elements in tails
        if (left === tails.length) {
            tails.push(num);
        } else {
            // Replace the found index with num
            tails[left] = num;
        }
    }

    return tails.length;
}

// Example usage:
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Output: 4
