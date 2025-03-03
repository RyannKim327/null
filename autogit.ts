function findMajorityElement(nums: number[]): number | null {
    let candidate: number | null = null;
    let count = 0;

    // First pass: Finding the candidate for majority element
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

    // Second pass: Verifying that the candidate is actually the majority element
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    // Check if it actually appears more than n/2 times
    if (count > nums.length / 2) {
        return candidate;
    }

    return null; // No majority element found
}

// Example usage:
const nums = [3, 2, 3];
const majorityElement = findMajorityElement(nums);
console.log(majorityElement); // Output: 3
