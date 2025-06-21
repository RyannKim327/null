function findMajorityElement(nums: number[]): number | null {
    // Step 1: Initialize variables
    let candidate: number | null = null;
    let count = 0;

    // Step 2: First pass to find the candidate
    for (const num of nums) {
        if (count === 0) {
            candidate = num; // Set current number as the candidate
        }
        count += (num === candidate ? 1 : -1); // Update count
    }

    // Step 3: Second pass to verify the candidate
    if (candidate !== null) {
        const occurrence = nums.filter(num => num === candidate).length;
        if (occurrence > Math.floor(nums.length / 2)) {
            return candidate; // Majority element found
        }
    }

    return null; // No majority element exists
}

// Example Usage
const array = [3, 2, 3];
console.log(findMajorityElement(array)); // Output: 3

const array2 = [2, 2, 1, 1, 1, 2, 2];
console.log(findMajorityElement(array2)); // Output: 2

const array3 = [1, 2, 3, 4, 5];
console.log(findMajorityElement(array3)); // Output: null
function findMajorityElementWithMap(nums: number[]): number | null {
    const counts: Map<number, number> = new Map();

    for (const num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
        if (counts.get(num)! > Math.floor(nums.length / 2)) {
            return num;
        }
    }

    return null;
}
