function findMajorityElement(nums: number[]): number | null {
    let count = 0;
    let candidate: number | null = null;

    // First pass: Find a candidate for majority element
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Second pass: Verify the candidate
    count = nums.filter(num => num === candidate).length;

    return count > Math.floor(nums.length / 2) ? candidate : null;
}

// Example usage:
const arr = [3, 2, 3];
console.log(findMajorityElement(arr)); // Output: 3
