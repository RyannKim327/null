function majorityElement(nums: number[]): number | null {
    let candidate: number | null = null;
    let count = 0;

    // Phase 1: Find a candidate for the majority element
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Phase 2: Verify the candidate
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > nums.length / 2 ? candidate : null;
}

// Example usage:
const nums = [3, 2, 3];
const result = majorityElement(nums);
console.log(result); // Output: 3
