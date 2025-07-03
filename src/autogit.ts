function majorityElement(nums: number[]): number | null {
    const countMap: { [key: number]: number } = {};
    const majorityCount = Math.floor(nums.length / 2);

    for (const num of nums) {
        countMap[num] = (countMap[num] || 0) + 1;
        if (countMap[num] > majorityCount) {
            return num;
        }
    }

    return null; // If no majority element exists
}

// Example usage:
const nums = [3, 2, 3];
console.log(majorityElement(nums)); // Output: 3
function majorityElement(nums: number[]): number | null {
    let candidate: number | null = null;
    let count = 0;

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

    // Optional: Verify that the candidate is indeed the majority element
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > Math.floor(nums.length / 2) ? candidate : null;
}

// Example usage:
const nums = [3, 2, 3];
console.log(majorityElement(nums)); // Output: 3
function majorityElement(nums: number[]): number | null {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}

// Example usage:
const nums = [3, 2, 3];
console.log(majorityElement(nums)); // Output: 3
