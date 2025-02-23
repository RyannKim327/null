function majorityElement(nums: number[]): number | null {
    let candidate: number | null = null;
    let count = 0;

    // Phase 1: Find a candidate for the majority element
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Phase 2: Validate the candidate
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    // Check if the candidate is indeed the majority element
    return (count > nums.length / 2) ? candidate : null;
}

// Example usage:
const nums = [3, 2, 3];
const result = majorityElement(nums);
console.log(result); // Output: 3
