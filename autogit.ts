function findMajorityElement(nums: number[]): number | null {
    let candidate: number | null = null;
    let count = 0;

    // First pass: Find a candidate
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

    // Second pass: Verify the candidate
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    if (count > nums.length / 2) {
        return candidate; // Return the majority element
    } else {
        return null; // No majority element found
    }
}

// Example usage:
const nums = [3, 2, 3];
const majorityElement = findMajorityElement(nums);
console.log(majorityElement); // Output: 3
