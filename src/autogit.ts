function findMajorityElement(nums: number[]): number | null {
    let candidate: number | null = null;
    let count = 0;

    // Step 1: Find the potential candidate
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += num === candidate ? 1 : -1;
    }

    // Step 2: Verify if the candidate is indeed the majority element
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > nums.length / 2 ? candidate : null;
}

// Example usage:
const array = [3, 2, 3];
console.log(findMajorityElement(array)); // Output: 3
function findMajorityElementWithMap(nums: number[]): number | null {
    const frequencyMap: Record<number, number> = {};

    // Count the frequency of each element
    for (const num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Find the element with frequency > n/2
    for (const [num, count] of Object.entries(frequencyMap)) {
        if (count > nums.length / 2) {
            return parseInt(num);
        }
    }

    return null;
}

// Example usage:
const array = [2, 2, 1, 1, 1, 2, 2];
console.log(findMajorityElementWithMap(array)); // Output: 2
function findMajorityElementBySorting(nums: number[]): number | null {
    if (nums.length === 0) return null;

    nums.sort((a, b) => a - b); // Sort the array
    const middleIndex = Math.floor(nums.length / 2);

    // Verify if the middle element is the majority
    const candidate = nums[middleIndex];
    let count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > nums.length / 2 ? candidate : null;
}

// Example usage:
const array = [6, 5, 5];
console.log(findMajorityElementBySorting(array)); // Output: 5
function findMajorityElement(nums: number[]): number | null {
    let candidate: number | null = null;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += num === candidate ? 1 : -1;
    }

    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > nums.length / 2 ? candidate : null;
}
