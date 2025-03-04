function majorityElement(nums: number[]): number | null {
    let candidate: number | null = null;
    let count = 0;

    // Phase 1: Find a candidate for the majority element
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

    return count > nums.length / 2 ? candidate : null;
}

// Example usage
const nums = [3, 2, 3];
const majority = majorityElement(nums);
console.log(majority); // Output: 3
function majorityElementUsingMap(nums: number[]): number | null {
    const countMap: Record<number, number> = {};
    const majorityThreshold = nums.length / 2;

    for (const num of nums) {
        if (!countMap[num]) {
            countMap[num] = 0;
        }
        countMap[num]++;
        
        if (countMap[num] > majorityThreshold) {
            return num;
        }
    }

    return null;
}

// Example usage
const nums2 = [2, 2, 1, 1, 1, 2, 2];
const majority2 = majorityElementUsingMap(nums2);
console.log(majority2); // Output: 2
