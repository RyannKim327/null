function majorityElement(nums: number[]): number {
    let candidate: number = nums[0];
    let count: number = 1;

    // Phase 1: Find a candidate for the majority element
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
            if (count === 0) {
                candidate = nums[i];
                count = 1;
            }
        }
    }

    // Phase 2: Confirm that the candidate is indeed the majority element
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    // If the count of candidate is more than n/2, return it
    if (count > Math.floor(nums.length / 2)) {
        return candidate;
    } else {
        throw new Error("No majority element found");
    }
}

// Example usage:
const nums = [3, 2, 3];
const result = majorityElement(nums);
console.log(result); // Output: 3
