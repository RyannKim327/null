function majorityElement(nums: number[]): number | null {
    let candidate: number | null = null;
    let count = 0;

    // Phase 1: Find a potential candidate
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Phase 2: Validate the candidate
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

// Example usage
const nums = [3, 2, 3];
console.log(majorityElement(nums)); // Output: 3
function majorityElementWithMap(nums: number[]): number | null {
    const countMap: { [key: number]: number } = {};
    const majorityThreshold = nums.length / 2;

    for (const num of nums) {
        countMap[num] = (countMap[num] || 0) + 1;

        if (countMap[num] > majorityThreshold) {
            return num; // Return early if we find a majority
        }
    }

    return null; // No majority element
}

// Example usage
const nums = [3, 2, 3];
console.log(majorityElementWithMap(nums)); // Output: 3
