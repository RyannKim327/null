function findMajorityElement(nums: number[]): number | null {
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

    // Phase 2: Verify the candidate
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    // Return the candidate if it is a majority element
    if (count > nums.length / 2) {
        return candidate;
    }

    return null; // No majority element found
}

// Example usage
const nums = [3, 2, 3];
const majorityElement = findMajorityElement(nums);
console.log(majorityElement); // Output: 3
