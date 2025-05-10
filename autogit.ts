function majorityElement(nums: number[]): number | null {
    let count = 0;
    let candidate: number | null = null;

    // Phase 1: Find a candidate for majority element
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Phase 2: Verify the candidate is actually the majority element
    if (candidate !== null) {
        const occurrence = nums.filter(num => num === candidate).length;
        if (occurrence > Math.floor(nums.length / 2)) {
            return candidate;
        }
    }

    return null; // No majority element found
}

// Example:
const arr = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(arr)); // Output: 2
