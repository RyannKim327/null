function majorityElement(nums: number[]): number {
    let candidate: number | null = null;
    let count = 0;

    // Phase 1: Find a candidate
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

    // Phase 2: Verify the candidate (optional, if you want to ensure it's a majority)
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > nums.length / 2 ? candidate : -1; // Return -1 if no majority element exists
}

// Example usage:
const nums = [3, 2, 3];
console.log(majorityElement(nums)); // Output: 3
