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

    // Check if the candidate is indeed the majority element
    if (count > nums.length / 2) {
        return candidate;
    }

    return null; // No majority element
}

// Example usage:
const nums = [3, 2, 3];
const majorityElement = findMajorityElement(nums);
console.log(majorityElement); // Output: 3
function findMajorityElementUsingMap(nums: number[]): number | null {
    const countMap: { [key: number]: number } = {};

    for (const num of nums) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    const majorityCount = nums.length / 2;
    for (const [key, value] of Object.entries(countMap)) {
        if (value > majorityCount) {
            return +key; // Convert key back to number
        }
    }

    return null; // No majority element
}
