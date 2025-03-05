function majorityElement(nums: number[]): number | null {
    let count = 0;
    let candidate: number | null = null;

    // Phase 1: Find a candidate for majority element
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

    // Return the candidate if it's a majority element
    return count > nums.length / 2 ? candidate : null;
}

// Example usage:
const arr = [3, 2, 3];
const result = majorityElement(arr);
console.log(result); // Output: 3
